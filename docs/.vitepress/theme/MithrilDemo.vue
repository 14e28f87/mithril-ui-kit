<template>
  <div class="mithril-demo">
    <div class="mithril-demo__preview" ref="hostEl"></div>
    <div class="mithril-demo__actions">
      <button class="mithril-demo__toggle" @click="showCode = !showCode">
        {{ showCode ? 'コードを隠す' : 'コードを表示' }}
      </button>
    </div>
    <div v-show="showCode" class="mithril-demo__code">
      <div
        v-if="code"
        class="mithril-demo__highlight vp-adaptive-theme"
        v-html="highlightedCode"
      ></div>
      <div v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import m from "mithril";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { codeToHtml } from "shiki";
import componentCSS from "./component-styles.scss?inline";

const BOOTSTRAP_CDN =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

const props = defineProps<{
  setup: (el: HTMLElement) => void;
  code?: string;
  lang?: string;
}>();

const hostEl = ref<HTMLElement>();
const showCode = ref(false);
const highlightedCode = ref("");
const STYLE_ID_HINTS = ["mithril-ui-kit", "mithril-ui-kit"];
let mountPoint: HTMLDivElement | null = null;
let styleObserver: MutationObserver | null = null;

async function updateHighlight() {
  if (!props.code) {
    highlightedCode.value = "";
    return;
  }

  highlightedCode.value = await codeToHtml(props.code, {
    lang: props.lang ?? "ts",
    themes: {
      light: "github-light",
      dark: "github-dark"
    }
  });
}

/**
 * Vite dev モードで document.head に注入された mithril-ui-kit 関連の
 * <style> タグを Shadow DOM にクローンする
 */
function isLibraryStyleTag(style: HTMLStyleElement): boolean {
  const id = style.getAttribute("data-vite-dev-id") || "";
  return STYLE_ID_HINTS.some((hint) => id.includes(hint));
}

function cloneComponentStyles(shadow: ShadowRoot): boolean {
  let found = false;
  document.querySelectorAll("style").forEach((style) => {
    if (style instanceof HTMLStyleElement && isLibraryStyleTag(style)) {
      shadow.appendChild(style.cloneNode(true));
      found = true;
    }
  });
  return found;
}

/**
 * 遅延ロードされるコンポーネントスタイルを監視して
 * Shadow DOM にクローンする
 */
function observeNewStyles(shadow: ShadowRoot): MutationObserver {
  const obs = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLStyleElement && isLibraryStyleTag(node)) {
          shadow.appendChild(node.cloneNode(true));
        }
      }
    }
  });
  obs.observe(document.head, { childList: true });
  return obs;
}

onMounted(() => {
  if (!hostEl.value || !props.setup) return;

  // Shadow Root を作成して Bootstrap CSS を隔離
  const shadow = hostEl.value.attachShadow({ mode: "open" });

  // Bootstrap CSS を Shadow DOM 内にロード
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = BOOTSTRAP_CDN;
  shadow.appendChild(link);

  // コンポーネント固有スタイルを注入
  // Dev: Vite が head に注入した style タグをクローン
  // Prod: ビルド時にバンドルしたフォールバック CSS を使用
  const devStylesFound = cloneComponentStyles(shadow);
  if (!devStylesFound) {
    const style = document.createElement("style");
    style.textContent = componentCSS;
    shadow.appendChild(style);
  }

  // 遅延ロードされるスタイルを監視
  styleObserver = observeNewStyles(shadow);

  // Mithril マウントポイント
  mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);

  props.setup(mountPoint);

  void updateHighlight();
});

onUnmounted(() => {
  if (mountPoint) {
    m.mount(mountPoint, null);
    mountPoint = null;
  }
  if (styleObserver) {
    styleObserver.disconnect();
    styleObserver = null;
  }
});

watch(
  () => [props.code, props.lang],
  () => void updateHighlight()
);
</script>

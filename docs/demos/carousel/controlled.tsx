/** @jsx m */
import m from "mithril";
import { Carousel } from "mithril-ui-kit";
import type { CarouselPageChangeDetails } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  let page = 0;
  const slides = ["Overview", "Trend", "Alarm"];

  m.mount(el, {
    view() {
      return (
        <div style={{ display: "grid", gap: "12px", maxWidth: "520px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {slides.map((label, index) => (
              <button type="button" class="vp-button" onclick={() => { page = index; m.redraw(); }}>
                {label}
              </button>
            ))}
          </div>

          <Carousel.Root page={page} onPageChange={(details: CarouselPageChangeDetails) => { page = details.page; m.redraw(); }} slideCount={slides.length}>
            <Carousel.Control>
              <Carousel.PrevTrigger>◀</Carousel.PrevTrigger>
              <Carousel.NextTrigger>▶</Carousel.NextTrigger>
            </Carousel.Control>

            <Carousel.ItemGroup>
              {slides.map((label, index) => (
                <Carousel.Item index={index} key={label}>
                  <div style={{ padding: "24px", borderRadius: "14px", background: "#f8fafc", minHeight: "140px" }}>
                    <div style={{ fontWeight: "700", marginBottom: "8px" }}>{label}</div>
                    <div style={{ color: "#475569" }}>外部状態で page を制御しているデモです。</div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.IndicatorGroup>
              {slides.map((_, index) => <Carousel.Indicator index={index} key={index} />)}
            </Carousel.IndicatorGroup>
          </Carousel.Root>

          <div style={{ color: "#475569", fontSize: "0.9rem" }}>current page: {page}</div>
        </div>
      );
    },
  });
}
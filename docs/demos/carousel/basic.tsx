/** @jsx m */
import m from "mithril";
import { Carousel } from "mithriluikit";

export function setup(el: HTMLElement): void {
  const slides = [
    { title: "Kiln A", text: "現在温度 812℃", bg: "#dbeafe" },
    { title: "Kiln B", text: "現在温度 624℃", bg: "#dcfce7" },
    { title: "Kiln C", text: "保持工程 12 min", bg: "#fef3c7" },
  ];

  m.mount(el, {
    view() {
      return (
        <div style={{ maxWidth: "520px" }}>
          <Carousel.Root slideCount={slides.length} loop={true} autoplay={3200}>
            <Carousel.Control>
              <Carousel.PrevTrigger>◀</Carousel.PrevTrigger>
              <Carousel.NextTrigger>▶</Carousel.NextTrigger>
            </Carousel.Control>

            <Carousel.ItemGroup>
              {slides.map((slide, index) => (
                <Carousel.Item index={index} key={slide.title}>
                  <div
                    style={{
                      background: slide.bg,
                      padding: "24px",
                      borderRadius: "14px",
                      minHeight: "150px",
                      display: "grid",
                      alignContent: "start",
                      gap: "8px",
                    }}
                  >
                    <strong>{slide.title}</strong>
                    <div>{slide.text}</div>
                    <div style={{ color: "#475569", fontSize: "0.9rem" }}>バッチ監視カードの切り替え例です。</div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.IndicatorGroup>
              {slides.map((_, index) => <Carousel.Indicator index={index} key={index} />)}
            </Carousel.IndicatorGroup>
          </Carousel.Root>
        </div>
      );
    },
  });
}

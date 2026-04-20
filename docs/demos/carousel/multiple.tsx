/** @jsx m */
import m from "mithril";
import { Carousel } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  const cards = [
    "Temperature",
    "Pressure",
    "Power",
    "Gas",
  ];

  m.mount(el, {
    view() {
      return (
        <div style={{ maxWidth: "620px" }}>
          <Carousel.Root slideCount={cards.length} slidesPerPage={2}>
            <Carousel.Control>
              <Carousel.PrevTrigger>Prev</Carousel.PrevTrigger>
              <Carousel.NextTrigger>Next</Carousel.NextTrigger>
            </Carousel.Control>

            <Carousel.ItemGroup>
              {cards.map((card, index) => (
                <Carousel.Item index={index} key={card}>
                  <div
                    style={{
                      marginRight: "12px",
                      padding: "18px",
                      borderRadius: "14px",
                      border: "1px solid #d0d7de",
                      background: "#ffffff",
                      minHeight: "120px",
                    }}
                  >
                    <div style={{ fontWeight: "700", marginBottom: "6px" }}>{card}</div>
                    <div style={{ color: "#475569", fontSize: "0.9rem" }}>2 枚ずつ表示するギャラリー例です。</div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.IndicatorGroup>
              <Carousel.Indicator index={0} />
              <Carousel.Indicator index={1} />
            </Carousel.IndicatorGroup>
          </Carousel.Root>
        </div>
      );
    },
  });
}
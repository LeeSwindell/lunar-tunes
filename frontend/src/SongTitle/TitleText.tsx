import opentype from "opentype.js";
import "./TitleText.css";
import makerjs from "makerjs";
import { useState, useEffect } from "react";

function TitleText (songTitle: string) {
  const initialFontValue: opentype.Font | null = null;
  const [font, setFont] = useState<opentype.Font | null>(initialFontValue);
  useEffect(() => {
    const fetchFont = async () => {
      opentype.load('/fonts/RobotoMono-Bold.ttf', function(err, font) {
        if(err) {
          console.log(err)
        }
        if (font) {
          setFont(font)
        }
      })
    };
    fetchFont();
  }, []);
  const text = songTitle;
  const size = 60;
  const [textModel, setTextModel] = useState<makerjs.IModel | null>(null);

  useEffect(() => {
    if (font) {
      const model = new makerjs.models.Text(font, text, size);
      setTextModel(model);
    }
  }, [font, text, size]);

  if (!textModel) {
    return null;
  } else {
    let svg = makerjs.exporter.toSVG(textModel, {
      stroke: "#F0F9FF",
      strokeWidth: "3px",
      // fill: "#F0F9FF",
      className: "TitleText",
    });

    svg = svg.replace('<svg ', '<svg overflow="visible"')
    svg = svg.replace('<path ', '<path class="TitleTextPath" pathLength=1 strokeDashArray=1 strokeDashOffset=0 ')
    const container = document.getElementById("TitleTextContainer")
    if (container) {
      container.innerHTML = svg;
    }
    return (
      null
    )
  }
}

export default TitleText
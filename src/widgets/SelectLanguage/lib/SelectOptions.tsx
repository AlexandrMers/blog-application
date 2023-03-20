import React from "react";

import IconRu from "shared/assets/icons/flag-ru.svg";
import IconEn from "shared/assets/icons/flag-en.svg";
import { SuggestType } from "shared/types";

const SvgProps: React.SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  style: {
    marginRight: 4,
  },
};

export const OptionsForSelect: SuggestType[] = [
  {
    id: "ru",
    name: "Русский",
    render: (name) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconRu {...SvgProps} />
          {name}
        </div>
      );
    },
  },
  {
    id: "en",
    name: "Английский",
    render: (name) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconEn {...SvgProps} />
          {name}
        </div>
      );
    },
  },
];

export const box = ({ keys: k, values: v, props: p }) => {
  const defaults = [
    [k.fontWeight, "500"],
    [k.marginTop, '1.0rem'],
    [k.marginBottom, '0.5rem'],
    [k.fontFamily, v.fontFamily.sourceSansPro]
  ];
  switch (p.type) {
    case "2":
      return [...defaults, [k.fontSize, "30px"]];
    case "3":
      return [...defaults, [k.fontSize, "24px"]];
  }
};

export const heading = ({ keys: k, values: v, props: p }) => {
  const defaults = [
    [k.fontWeight, "500"],
    [k.margin, 0],
    [k.fontFamily, v.fontFamily.sourceSansPro]
  ];
  switch (p.type) {
    case "2":
      return [...defaults, [k.fontSize, "30px"]];
    case "3":
      return [...defaults, [k.fontSize, "24px"]];
  }
};

export const caption = ({ keys: k, values: v, props: p }) => {
  const defaults = [
    [k.fontWeight, "500"],
    [k.color, v.color.gray400],
    [k.fontFamily, v.fontFamily.sourceSansPro]
  ];
  switch (p.type) {
    case "2":
      return [...defaults, [k.fontSize, "16px"]];
    case "3":
      return [...defaults, [k.fontSize, "14px"]];
  }
};

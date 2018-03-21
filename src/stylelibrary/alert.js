export const alertTypes = {
  tip: "tip",
  success: "success",
  error: "error",
  info: "info",
  warning: "warning"
};

export const AlertTypePropRequiredError = (cogName = '', knownAlertTypes = alertTypes) => Error(
  `The cog ${cogName} requires a type prop prop of one of the following: ${Object.keys(alertTypes).map(t => ` '${t}'`)}`
);

export const alert = {
  icon: ({ keys: k, values: v, props: p }) => {
    if(!p.type) {
      throw AlertTypePropRequiredError('alert.icon');
    }
    const alertIconCode = {
      tip: "\\e952",
      success: "\\e918",
      error: "\\e981",
      info: "\\e94d",
      warning: "\\e98d"
    };
    return [
      ['&:before', `{
          font-family: "SPS-Icons";
          content: "${alertIconCode[p.type]}";
          color: ${p.type !== alertTypes.tip ? 'white' : v.color.yellow300};
          font-style: normal;
          font-size: 20px;
          font-weight: 400;
          vertical-align: sub;
          padding-right: 10px;
        }
      `]
    ]
  },
  message: ({ keys: k, values: v, props: p }) => {
    const defaults = [
      [k.boxSizing, v.boxSizing.borderBox],
      [k.fontFamily, v.fontFamily.sourceSansPro],
      [k.fontSize, v.px.fourteen],
      [k.fontWeight, v.fontWeight.bold],
      [k.lineHeight, v.px.twenty],
      [k.textAlign, v.direction.left],
      [k.webkitFontSmoothing, v.webkitFontSmoothing.antialiased]
    ];
    switch (p.type) {
      default:
        throw AlertTypePropRequiredError('alert.message');
      case "tip":
        return [...defaults, [k.color, p.fg || v.color.black]];
      case "success":
        return [...defaults, [k.color, p.fg || v.color.white]];
      case "info":
        return [...defaults, [k.color, p.fg || v.color.white]];
      case "warning":
        return [...defaults, [k.color, p.fg || v.color.white]];
      case "error":
        return [...defaults, [k.color, p.fg || v.color.white]];
    }
  },
  box: ({ keys: k, values: v, props: p }) => {
    const defaults = [
      [k.boxSizing, v.boxSizing.borderBox],
      [k.borderWidth, v.px.one],
      [k.borderStyle, v.borderStyle.solid],
      [k.borderColor, v.color.transparent],
      [k.borderRadius, v.px.three],
      [k.display, v.display.flex],
      [k.alignItems, v.alignItems.center],
      [k.marginBottom, v.px.twenty],
      [k.paddingBottom, v.px.eight],
      [k.paddingLeft, v.px.fifteen],
      [k.paddingRight, v.px.fifteen],
      [k.paddingTop, v.px.eight]
    ];
    switch (p.type) {
      default:
        throw AlertTypePropRequiredError('alert.box');
      case alertTypes.tip:
        return [
          ...defaults,
          [k.backgroundColor, p.bg || v.color.yellow100],
          [k.borderColor, p.borderColor || v.color.yellow300]
        ];
      case alertTypes.success:
        return [...defaults, [k.backgroundColor, p.bg || v.color.green200]];
      case alertTypes.info:
        return [...defaults, [k.backgroundColor, p.bg || v.color.blue200]];
      case alertTypes.warning:
        return [...defaults, [k.backgroundColor, p.bg || v.color.orange200]];
      case alertTypes.error:
        return [...defaults, [k.backgroundColor, p.bg || v.color.red200]];
    }
  }
};

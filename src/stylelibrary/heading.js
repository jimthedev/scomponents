export const heading = ({ keys: k, values: v, props: p }) => {
  const defaults = [
    [k.fontWeight, '500'],
    [k.fontFamily, v.fontFamily.sourceSansPro]
  ];
  switch (p.type) {
    case '2':
      return [
        ...defaults,
        [k.fontSize, '30px']
      ]
    case '3':
      return [
        ...defaults,
        [k.fontSize, '24px'],
      ]

      
  }
}
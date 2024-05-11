---
    layout: doc
---

#### 构建数据

``` javascript
    // 创建文档 option数据格式见下方
    const doc = new docx.Document(option);

    // 打包文档 转成Blob数据
    docx.Packer.toBlob(doc).then(blob => {
        console.log(blob);
    });

    // 利用FileSaver里的saveAs方法 保存为docx格式的文件
    saveAs(blob, 'example.docx');
```

#### option 数据格式
``` json
{
    // 文档创建者
    creator: 'Tom',
    // 文档标题
    title: 'docx title',
    // 文档描述
    description: 'a wonderful docx',
    // 定义文档公共样式
    styles: {
        // 段落公共样式
        paragraphStyles: [
            {
                // 样式唯一ID 应用于Paragraph的style属性
                id: 'myStyle',
                // Run级节点的样式
                run: {
                    // 字体名称
                    font: '微软雅黑',
                    // 字体大小
                    size: 24,
                    // 字体颜色
                    color: black | '000000',
                    // 字体加粗
                    bold: true | false,
                    // 字体倾斜
                    italics: true | false
                },
                // 段落节点的样式
                paragraph: {
                    // 段落间距
                    spacing: {
                        // 行高
                        line: 276,
                        // 向上外边距
                        before: 140,
                        // 向下外边距
                        after: 140,
                    }
                }
            }
        ]
    },
    // 节（段落组）
    sections: [
        {
            // 节属性
            properties: {
                column: {
                    children: [],
                    count: 0,
                    equalWidth: false,
                    separate: false,
                    space: 0
                },
                headerWrapperGroup: IHeaderFooterGroup<HeaderWrapper>,
                footerWrapperGroup: IHeaderFooterGroup<FooterWrapper>,
                grid: {
                    charSpace: 0,
                    linePitch: 0,
                    type: "default" | "lines" | "linesAndChars" | "snapToChars"
                }
                lineNumbers: {
                    countBy: 0,
                    distance: 10 | '10cm',
                    restart: LineNumberRestartFormat.CONTINUOUS | LineNumberRestartFormat.NEW_PAGE | LineNumberRestartFormat.NEW_SECTION,
                    start: 0,
                };
                page: {
                    // 页面边框
                    borders: {
                        pageBorderTop: {
                            color: 'ff0000',
                            size: 1,
                            space: 2,
                            style: "nil" | "single" | "dashDotStroked" | "dashed" | "dashSmallGap" | "dotDash" | "dotDotDash" | "dotted" | "double" | "doubleWave" | "inset" | "none" | "outset" | "thick" | "thickThinLargeGap" | "thickThinMediumGap" | "thickThinSmallGap" | "thinThickLargeGap" | "thinThickMediumGap" | "thinThickSmallGap" | "thinThickThinLargeGap" | "thinThickThinMediumGap" | "thinThickThinSmallGap" | "threeDEmboss" | "threeDEngrave" | "triple" | "wave"
                        },
                        pageBorderLeft: {},
                        pageBorderRight: {},
                        pageBorderBottom: {},
                    },
                    // 页面边距
                    margin: {
                        top: 20,
                        left: 20,
                        right: 20,
                        bottom: 20
                    },
                    pageNumbers: {
                        formatType: "none" | "bullet" | "decimal" | "upperRoman" | "lowerRoman" | "upperLetter" | "lowerLetter" | "ordinal" | "cardinalText" | "ordinalText" | "hex" | "chicago" | "ideographDigital" | "japaneseCounting" | "aiueo" | "iroha" | "decimalFullWidth" | "decimalHalfWidth" | "japaneseLegal" | "japaneseDigitalTenThousand" | "decimalEnclosedCircle" | "decimalFullWidth2" | "aiueoFullWidth" | "irohaFullWidth" | "decimalZero" | "ganada" | "chosung" | "decimalEnclosedFullstop" | "decimalEnclosedParen" | "decimalEnclosedCircleChinese" | "ideographEnclosedCircle" | "ideographTraditional" | "ideographZodiac" | "ideographZodiacTraditional" | "taiwaneseCounting" | "ideographLegalTraditional" | "taiwaneseCountingThousand" | "taiwaneseDigital" | "chineseCounting" | "chineseLegalSimplified" | "chineseCountingThousand" | "koreanDigital" | "koreanCounting" | "koreanLegal" | "koreanDigital2" | "vietnameseCounting" | "russianLower" | "russianUpper" | "numberInDash" | "hebrew1" | "hebrew2" | "arabicAlpha" | "arabicAbjad" | "hindiVowels" | "hindiConsonants" | "hindiNumbers" | "hindiCounting" | "thaiLetters" | "thaiNumbers" | "thaiCounting" | "bahtText" | "dollarText",
                        separator: "hyphen" | "period" | "colon" | "emDash" | "endash",
                        start: 0
                    },
                    // 页面大小
                    size: {
                        // 页面宽度
                        width: 595 | '21cm',
                        // 页面高度
                        height: 842 | '29.7cm',
                        // 页面方向
                        orientation: "landscape" | "portrait"
                    },
                    // 文字方向
                    textDirection: "lrTb" | "tbRl",
                };
                titlePage: false,
                type: "continuous" | "nextPage" | "nextColumn" | "evenPage" | "oddPage",
                verticalAlign: "bottom" | "center" | "top"
            },
            children: [
                new docx.Paragraph({
                    
                })
            ]
        }
    ]
}

```


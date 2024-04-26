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
        // 节属性
        properties: {
            type: docx.SectionType.CONTINUOUS | docx.SectionType.NEXT_PAGE
        }
    ]
}

```


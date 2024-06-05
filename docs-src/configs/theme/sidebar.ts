import photoConfig from '../../configs/photos.json';

const sidebar = {
    '/guides/notes/docx': [
        {
            text: 'docx.js 使用笔记',
            items: [
                { text: '概述', link: '/guides/notes/docx/welcome' },
                { text: '构建数据', link: '/guides/notes/docx/build' },
            ]
        }
    ],
    '/guides/tools': [
        {
        //     text: '在线格式化工具',
        //     collapsed: true,
        //     items: [
        //         { text: 'XML在线格式化', link: '/guides/tools/format/xml' },
        //         { text: 'JSON在线格式化', link: '/guides/tools/format/json' },
        //     ]
        // }, {
            text: '在线转换工具',
            collapsed: true,
            items: [
                { text: '图片转BASE64', link: '/guides/tools/convert/image2base64' },
                { text: 'RGB转16进制', link: '/guides/tools/convert/rgb2hex' },
            ]
        }, {
            text: '在线编码/解码工具',
            collapsed: true,
            items: [
                { text: 'BASE64编码/解码', link: '/guides/tools/encode/base64' },
                { text: 'URL编码/解码', link: '/guides/tools/encode/url' },
            ]
        }, {
            text: '在线加密工具',
            collapsed: true,
            items: [
                { text: 'MD5加密', link: '/guides/tools/encrypt/md5' },
                { text: 'SHA加密', link: '/guides/tools/encrypt/sha' },
            ]
        }, {
            text: '在线生成工具',
            collapsed: true,
            items: [
                { text: '二维码生成器', link: '/guides/tools/builder/qrcode' },
            ]
        }, {
            text: '地图',
            collapsed: true,
            items: [
                { text: '高德地图', link: '/guides/tools/map/amap' },
                { text: '腾讯地图', link: '/guides/tools/map/tmap' },
            ]
        }
    ],
}

const addPhotoSidebar = () => {
    const root: string = '/guides/photos';
    // 添加照片墙列表Sidebar
    const sidebars: any[] = [];

    for ( let item of photoConfig.items ) {
        let bar: any = { text: item.text, collapsed: true, items: [] };
        for ( let it of item.items ) {
            let sidebarItem: any = { text: it.text, link: root + '/' + item.text + '-' + it.text };
            bar.items.push( sidebarItem );
        }
        sidebars.push( bar );
    }
    sidebar[ root ] = sidebars;
}

addPhotoSidebar();

export default sidebar;
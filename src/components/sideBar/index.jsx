import React from "react";
import { Menu } from "antd";
import "./style.scss";

const { SubMenu } = Menu;

const SideBar = () => {
    const menuList = [
        {
            path: "/",
            name: "Index",
            icon: "",
            id: '1'
        }, {
            path: "/text",
            name: "Text",
            icon: "",
            id: '2',
            children: [
                {
                    path: "/text/text_a",
                    name: 'TextA',
                    icon: '',
                    id: '2_1',
                }, {
                    path: '/text/text_b',
                    name: "TextB",
                    icon: '',
                    id: '2_2'
                }
            ]
        }
    ];
    const renderMenu = (menuList) => {
        if (menuList && menuList.length > 0) {
            return menuList.map(item => {
                return item.children && item.children.length > 0 ?
                    <SubMenu key={item.id} title={item.name}>
                        {renderMenu(item.children)}
                    </SubMenu> : <Menu.Item key={item.id}>{item.name}</Menu.Item>
            });
        }
    }
    return <Menu className='siuder_menu'>
        {renderMenu(menuList)}
    </Menu>
};

export default SideBar;

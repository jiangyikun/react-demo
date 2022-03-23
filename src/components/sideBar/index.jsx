import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import "./style.scss";

const { SubMenu } = Menu;

const SideBar = () => {
    let history = useHistory();
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
                    path: "/text/text_chart",
                    name: 'Chart',
                    icon: '',
                    id: '2_1',
                }, {
                    path: '/text/text_grid_a',
                    name: "Grid_a",
                    icon: '',
                    id: '2_2'
                }, {
                    path: '/text/text_grid_b',
                    name: "Grid_b",
                    icon: '',
                    id: '2_3'
                }, {
                    path: '/text/text_grid_virtualized',
                    name: "virtualized",
                    icon: '',
                    id: '2_4'
                }
            ]
        },
        {
            path: '/swiper',
            name: 'swiper',
            icon: '',
            id: 'swiper',
            children: [],
        },
        {
            path: '/debounce',
            name: '防抖节流',
            icon: '',
            id: "debounce",
            children: [],
        }
    ];
    const renderMenu = (menuList) => {
        if (menuList && menuList.length > 0) {
            return menuList.map(item => {
                return item.children && item.children.length > 0 ?
                    <SubMenu key={item.id} title={item.name}>
                        {renderMenu(item.children)}
                    </SubMenu> : <Menu.Item key={item.id} path={item.path}>{item.name}</Menu.Item>
            });
        }
    }
    const menuItemClick = ({ item }) => {
        window.console.log(history, 'history');
        history.push(item.props.path);
    }
    return <Menu
        className='siuder_menu'
        onClick={menuItemClick}
    >
        {renderMenu(menuList)}
    </Menu>
};

export default SideBar;

export const environment = {
    endPoint: 'http://localhost:8080/ServiceClient/api/',
    apiPath: {
        crawler: {
            main: 'CrawlerController',
            card: 'Card',
            camera: 'Camera'
        },
        brand: {
            main: 'Brand',
            getById: 'Brand/',
            request: 'BrandController'
        },
        category: {
            main: 'Category',
            getById: 'Category/',
            request: 'CategoryController'
        },
        camera: {
            main: 'Camera',
            getById: 'Camera/',
            request: 'CameraController'
        },
        capacity: {
            main: 'Capacity',
            getById: 'Capacity/',
            request: 'CapacityController'
        },
        card: {
            main: 'Card',
            getById: 'Card/',
            request: 'CardController'
        },
        role: {
            main: 'Role',
            getById: 'Role/',
            request: 'RoleController'
        },
        account: {
            main: 'Account',
            getById: 'Account/',
            request: 'AccountController'
        },
        auth: {
            main: 'Auth'
        }
    },
    menu: [
        {
            title: 'Crawler',
            icon: 'WEB-RENDER/src/assets/menu/crawler.png',
            data: 'CRAWLER',
            check: 'canActiveCrawler'
        },
        {
            title: 'Account',
            icon: 'WEB-RENDER/src/assets/menu/account.png',
            data: 'ACCOUNT',
            check: 'canActiveAccount'
        },
        {
            title: 'Role',
            icon: 'WEB-RENDER/src/assets/menu/role.png',
            data: 'ROLE',
            check: 'canActiveRole'
        },
        {
            title: 'Brand',
            icon: 'WEB-RENDER/src/assets/menu/brand.png',
            data: 'BRAND',
            check: 'canActiveBrand'
        },
        {
            title: 'Category',
            icon: 'WEB-RENDER/src/assets/menu/category.png',
            data: 'CATEGORY',
            check: 'canActiveCategory'
        },
        {
            title: 'Capacity',
            icon: 'WEB-RENDER/src/assets/menu/capacity.png',
            data: 'CAPACITY',
            check: 'canActiveCapacity'
        },
        {
            title: 'Camera',
            icon: 'WEB-RENDER/src/assets/menu/camera.png',
            data: 'CAMERA',
            check: 'canActiveCamera'
        },
        {
            title: 'Card',
            icon: 'WEB-RENDER/src/assets/menu/card.png',
            data: 'CARD',
            check: 'canActiveCard'
        }
    ],
    table: {
        brand: [
            {
                label: 'Name',
                key: 'name',
                size: 85
            }
        ],
        camera: [
            {
                label: 'Name',
                key: 'name',
                size: 65
            },
            {
                label: 'Megapixel',
                key: 'megapixel',
                size: 10
            },
            {
                label: 'Price',
                key: 'price',
                size: 10
            }
        ],
        card: [
            {
                label: 'Name',
                key: 'name',
                size: 75
            },
            {
                label: 'Price',
                key: 'price',
                size: 10
            }
        ],
        capacity: [
            {
                label: 'Name',
                key: 'name',
                size: 85
            }
        ],
        category: [
            {
                label: 'Name',
                key: 'name',
                size: 85
            }
        ],
        role: [
            {
                label: 'Name',
                key: 'name',
                size: 85
            }
        ],
        account: [
            {
                label: 'FullName',
                key: 'fullname',
                size: 85
            }
        ]
    },
    swal: {
        danger: {
            icon: "WEB-RENDER/src/assets/icons/danger.png",
            btnClass: "btn btn-danger"
        },
        warning: {
            icon: "WEB-RENDER/src/assets/icons/warning.png",
            btnClass: "btn btn-warning"
        },
        info: {
            icon: "WEB-RENDER/src/assets/icons/info.png",
            btnClass: "btn btn-info"
        },
        success: {
            icon: "WEB-RENDER/src/assets/icons/success.png",
            btnClass: "btn btn-success"
        }
    }
};
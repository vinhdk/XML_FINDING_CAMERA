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
            title: 'Camera',
            icon: 'WEB-RENDER/src/assets/menu/camera.png',
            data: 'CAMERA'
        },
        {
            title: 'Card',
            icon: 'WEB-RENDER/src/assets/menu/card.png',
            data: 'CARD'
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
    }
};
<template>
    <div class="cart">
        <h2 style="display: flex; align-items: center; text-align: center; margin-bottom: 30px;">Giỏ hàng <img width="45px" height="45px" src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt=""></h2>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="Ảnh sản phẩm" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <img width="90px" height="90px" :src="scope.row.image" alt="">
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Chi tiết" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <div>
                            <span>Màu sắc: <div
                                    style="width: 18px; height: 18px; background-color: red; border-radius: 5px;"></div>
                            </span>
                            <span>Kích cỡ: <div
                                    style="width: 20px; height: 20px; background-color: #EEEEEE; text-align: center; line-height: 20px;">
                                    S</div></span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Giá" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="color: blue; font-weight: bold">200.000 VND</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Số lượng" width="180">
                <template #default="scope">
                    <el-button>-</el-button>
                    <span style="margin: 0 15px;">1</span>
                    <el-button>+</el-button>
                </template>
            </el-table-column>

            <el-table-column label="Tổng tiền" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="color: red; font-weight: bold">1200.000 VND</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Thao tác">
                <template #default="scope">

                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                        <i class="pi pi-trash"></i>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div class="bottom">
        <div style="margin-top: 20px;">
            <span>Tổng tiền : &nbsp;</span>
            <span style="color: red; font-weight: bold">1200.000 VND</span>
        </div>
        <el-button type="primary" style="height: 45px; margin-top: 30px;">Thanh toán</el-button>
    </div>
</template>

<script lang="ts" setup>

interface Cart {
    image: string
    price: string
    info: string
    quantity: string
    total: string
}

const handleEdit = (index: number, row: Cart) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: Cart) => {
    console.log(index, row)
}

const tableData: Cart[] = [
    {
        image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg',
        info: '',
        price: '2016-05-03',
        quantity: 'Tom',
        total: 'No. 189, Grove St, Los Angeles',
    },
    {
        image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg',
        info: '',
        price: '2016-05-03',
        quantity: 'Tom',
        total: 'No. 189, Grove St, Los Angeles',
    }, {
        image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg',
        info: '',
        price: '2016-05-03',
        quantity: 'Tom',
        total: 'No. 189, Grove St, Los Angeles',
    }, {
        image: 'https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/product/1.jpg',
        info: '',
        price: '2016-05-03',
        quantity: 'Tom',
        total: 'No. 189, Grove St, Los Angeles',
    },
]
</script>


<style lang="scss" setup>
.cart {
    width: 80%;
    padding: 0 200px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;


}

.bottom {
    width: 80%;
    padding: 0 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
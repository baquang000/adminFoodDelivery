<template>
    <div class="card">
        <div
            style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto; display: flex; align-items: center; justify-content: center;">
            <i class="checkmark">✓</i>
        </div>
        <h1>Đặt hàng thành công !</h1>
        <p>Chúng tôi sẽ sớm kiểm tra đơn hàng và phản hồi qua email cho bạn.<br /></p>
    </div>
</template>

<style scoped lang="scss">
h1 {
    color: #88B04B;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
}

p {
    color: #404F5E;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    margin: 0;
}

i {
    color: #9ABC66;
    font-size: 100px;
    line-height: 200px;
    margin-left: -15px;
}

.card {
    background: white;
    padding: 60px;
    display: inline-block;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
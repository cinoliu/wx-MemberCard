Page({
    data: {
        shop: '',
     
    },
    //事件处理函数
    onLoad: function (options) {
        var that = this

        //playingList
        wx.request({
            url: 'https://raw.githubusercontent.com/cinoliu/wx-MemberCard/master/server/shopLIst.json',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.data.items = res.data
            }
        })
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            shop: '门店'
        })
    },
})

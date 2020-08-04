// pages/interface/media/compressVideo/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
	/**
	 * 压缩视频
	 */
	compressVideo: () => {
		wx.downloadFile({
			src:
				'https://vdept.bdstatic.com/6839646a425138326763513434596d7a/4776694b49566874/7aaacfe23642e72183f152c3a90b8713b74a7036f05121906585d704f3e8b28b2f2c5c5059baa377673d8c757d9a563d.mp4?auth_key=1595267603-0-0-7f5ada695145171d8e03949e438c227a',
			success: (res) => {
				console.log('调用成功', res);
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: (res) => {
				console.log('调用完成', res);
			},
		});
		wx.compressVideo({
			src: '../saveVideoToPhotoAlbum/resource/video/a.mp4',
			success: (res) => {
				console.log('调用成功', res);
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: (res) => {
				console.log('调用完成', res);
			},
		});
	},
});

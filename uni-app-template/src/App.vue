<script>
    import Vue from 'vue'
    import {test} from '@/api/test'

	export default {
		onLaunch: function() {
		    test()
			console.log('App Launch')
            // 判断手机状态栏高度
            uni.getSystemInfo({
                success: function (e) {
                    Vue.prototype.statusBar = e.statusBarHeight
                    // #ifndef MP
                    if (e.platform === 'android') {
                        Vue.prototype.customBar = e.statusBarHeight + 50
                    } else {
                        Vue.prototype.customBar = e.statusBarHeight + 45
                    }
                    // #endif
                }
            })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

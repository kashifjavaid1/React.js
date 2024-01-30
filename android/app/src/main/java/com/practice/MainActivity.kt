package com.practice

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this, R.style.SplashScreenTheme)  // Assuming you have a custom splash screen theme
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String {
        return "practice"
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): ReactRootView {
                return RNGestureHandlerEnabledRootView(this@MainActivity)
            }
        }
    }
}

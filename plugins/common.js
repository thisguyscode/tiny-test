import Vue from 'vue'

/**
 * FUNCTIONAL
 */

// Link
import fLink from '~/components/functional/f-link'
Vue.component('f-link', fLink)

/**
 * LAYOUT
 */

// Wrapper
import lWrapper from '~/components/layout/l-wrapper'
Vue.component('l-wrapper', lWrapper)

// Grid
import lGrid from '~/components/layout/l-grid'
Vue.component('l-grid', lGrid)

// Height Wrapper
import lHeightWrapper from '~/components/layout/l-height-wrapper'
Vue.component('l-height-wrapper', lHeightWrapper)

/**
 * COSMETIC
 */

// Image
import cImage from '~/components/c-image'
Vue.component('c-image', cImage)

// Box
import cBox from '~/components/c-box'
Vue.component('c-box', cBox)

// Icon
import cIcon from '~/components/c-icon'
Vue.component('c-icon', cIcon)
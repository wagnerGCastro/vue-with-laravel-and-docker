import Vue from 'vue'

import VxCard  from '@/components/vx-card/VxCard.vue'

const components = {
	VxCard
};

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component)
});


// Vue.component(VxCard.name, VxCard)
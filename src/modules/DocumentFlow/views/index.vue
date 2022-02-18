<template>
	<div class="document-flow flex-1">
		<template v-if="moduleLoaded">
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

const DocumentFlowStoreModule = () => import(/* webpackChunkName: "DocumentFlowStoreModule" */ "@/modules/DocumentFlow/store")

export default {
	name: "index",
	computed: {
		...mapState({
			moduleLoaded: "isDynamicModuleLoaded"
		}),
	},
	mounted() {
		DocumentFlowStoreModule().then(documentFlowModule => {
			this.$store.registerModule('documentFlowModule', documentFlowModule.default)

			this.LOADED_DYNAMIC_MODULE(true)

			this.init()
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule('documentFlowModule')
		this.LOADED_DYNAMIC_MODULE(false)
	},
	methods: {
		...mapActions({
			init: "documentFlowModule/init"
		}),
		/*
		*
		* */
		...mapMutations({
			LOADED_DYNAMIC_MODULE: "LOADED_DYNAMIC_MODULE"
		})
	}
}
</script>

<style scoped>

</style>

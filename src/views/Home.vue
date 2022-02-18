<template>
	<div>
<!--		<app-button-->
<!--			depressed-->
<!--			width="100%"-->
<!--			height="50"-->
<!--		>-->
<!--			<template>-->
<!--				<span class="font-500 small-2">Создать событие</span>-->
<!--			</template>-->
<!--			<template #append>-->
<!--				<v-icon>mdi-chevron-down</v-icon>-->
<!--			</template>-->
<!--		</app-button>-->

<!--		<app-skeleton />-->

		<media-object depressed
		              width="100%"
		              height="50">
			<template>
				<span class="font-500 small-2">Создать событие</span>
			</template>
			<template #append>
				<v-icon>mdi-chevron-down</v-icon>
			</template>
		</media-object>
	</div>
</template>

<script>
import AppSkeleton from "@/common/components/base/AppSkeleton"
// import AppButton from "@/common/components/base/AppButton";
import { lazyLoadComponent } from "@/common/helpers";

export default {
	name: 'Home',
	components: {
		// AppButton,
		// AppSkeleton,
		MediaObject: lazyLoadComponent({
			componentFactory: () => import(/* webpackChunkName: "AppButton" */ '@/common/components/base/AppButton'),
			loading: AppSkeleton,
			delay: 50000
		}),
	}
}
</script>

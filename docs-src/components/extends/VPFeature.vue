<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

defineProps<{
	icon?: DefaultTheme.FeatureIcon
	title: string
	details?: string
	link?: string
	linkText?: string
	rel?: string
	target?: string
}>()

const featureRef = ref();

const mousemoveHandler = ( evt: MouseEvent ) => {
	const { offsetX, offsetY } = evt;
	const { clientWidth, clientHeight } = featureRef.value.$el;

	const ii: number = ( offsetX / clientWidth - 0.5 ) * 0.2;
	const rr: number = ( offsetY / clientHeight - 0.5 ) * 0.8;
	const dd: number = Math.sqrt( ii * ii + rr * rr );

	featureRef.value.$el.style.setProperty('--cx', `${ offsetX }px`);
	featureRef.value.$el.style.setProperty('--cy', `${ offsetY }px`);
	featureRef.value.$el.style.setProperty('--i', `${ -rr / dd }`);
	featureRef.value.$el.style.setProperty('--r', `${ ii / dd }`);
	featureRef.value.$el.style.setProperty('--d', `${ 3 * dd }deg`);
}
 
const mouseleaveHandler = () => {
	featureRef.value.$el.style.setProperty('--cx', `-9999px`);
	featureRef.value.$el.style.setProperty('--cy', `-9999px`);
	featureRef.value.$el.style.setProperty('--i', 0);
	featureRef.value.$el.style.setProperty('--r', 0);
	featureRef.value.$el.style.setProperty('--d', 0);
}

onMounted(() => {
	
})

</script>

<template>
	<VPLink
		class="VPFeature"
		:href="link"
		:rel="rel"
		:target="target"
		:no-icon="true"
		:tag="link ? 'a' : 'div'"
		ref="featureRef"
		@mousemove="mousemoveHandler"
		@mouseleave="mouseleaveHandler"
	>
		<article class="box">
			<div v-if="typeof icon === 'object' && icon.wrap" class="icon">
				<VPImage :image="icon" :alt="icon.alt" :height="icon.height || 48" :width="icon.width || 48" />
			</div>
			<VPImage v-else-if="typeof icon === 'object'" :image="icon" :alt="icon.alt" :height="icon.height || 48"
				:width="icon.width || 48" />
			<div v-else-if="icon" class="icon" v-html="icon"></div>
			<h2 class="title" v-html="title"></h2>
			<p v-if="details" class="details" v-html="details"></p>

			<div v-if="linkText" class="link-text">
				<p class="link-text-value">
					{{ linkText }} <span class="vpi-arrow-right link-text-icon" />
				</p>
			</div>
		</article>
	</VPLink>
</template>

<style scoped>
.VPFeature {
	display: block;
	border: 1px solid var(--vp-c-bg-soft);
	border-radius: 12px;
	height: 100%;
	background-color: var(--vp-c-bg-soft);
	transition: border-color 0.25s, background-color 0.25s;

	background-image: radial-gradient(circle at var(--cx) var(--cy), rgba(14, 117, 177, 0.2) 0%, transparent 100%);
	transform: perspective(500px) rotate3d(var(--i), var(--r), 0, var(--d));
}

.VPFeature.link:hover {
	border-color: var(--vp-c-brand-1);
}

.box {
	display: flex;
	flex-direction: column;
	padding: 24px;
	height: 100%;
	pointer-events: none;
}

.box> :deep(.VPImage) {
	margin-bottom: 20px;
}

.icon {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	border-radius: 6px;
	background-color: var(--vp-c-default-soft);
	width: 48px;
	height: 48px;
	font-size: 24px;
	transition: background-color 0.25s;
}

.title {
	line-height: 24px;
	font-size: 16px;
	font-weight: 600;
}

.details {
	flex-grow: 1;
	padding-top: 8px;
	line-height: 24px;
	font-size: 14px;
	font-weight: 500;
	color: var(--vp-c-text-2);
}

.link-text {
	padding-top: 8px;
}

.link-text-value {
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	color: var(--vp-c-brand-1);
}

.link-text-icon {
	margin-left: 6px;
}
</style>

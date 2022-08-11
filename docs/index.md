<script setup>
import { useRouter } from 'vitepress'

const { go, route } = useRouter()
if (route.path === '/') {
  go('/service/overview')
}
</script>
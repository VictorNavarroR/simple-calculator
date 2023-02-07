import { defineComponent, ref } from "vue";
import CalculatorKeyBoard from "./CalculatorKeyBoard/CalculatorKeyBoard.vue"

export default defineComponent({
    name: 'Calculator',
    components: {
        CalculatorKeyBoard
    }
})
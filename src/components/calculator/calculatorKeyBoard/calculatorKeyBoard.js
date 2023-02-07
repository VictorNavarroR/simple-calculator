import { defineComponent, ref } from "vue";
import CalculatorScreen from "../calculatorScreen/calculatorScreen.vue"

export default defineComponent({
    name: 'CalculatorKeyBoard',
    components: {
        CalculatorScreen
    },
    setup() {
        const screenValue = ref(0);
        const sendValueToScreen = (e) => {
            const btnValue = e.target.innerText;
            screenValue.value === 0 ? screenValue.value = '' : screenValue.value;
            screenValue.value += btnValue;
        }
        const calculateScreenValues = () => {
            screenValue.value = eval(screenValue.value);
        }
        const resetScreenValues = () => {
            screenValue.value = 0;
        }
        return {
            sendValueToScreen,
            screenValue,
            calculateScreenValues,
            resetScreenValues
        }
    }
})
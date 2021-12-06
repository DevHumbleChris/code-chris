import DefaultState from '@/types/DefaultState'

export default {
  LOADING (state: DefaultState): void{
    state.isLoading = !state.isLoading
  }
}

import styles from './app.styles'
import templateUrl from './app.template'

const controller =
  /* @ngInject */
  class {
    // styles = styles
    // total = 0
    // base = 1
    //
    // multiplier = {
    //   total: 0,
    //   amount: 0.1,
    //   cost: 10
    // }
    //
    // autoclicker = {
    //   total: 0,
    //   amount: 1,
    //   cost: 5
    // }
    //
    // constructor ($log) {
    //   $log.debug(this)
    // }
    //
    // get amount () {
    //   return this.base + (this.base * this.multiplier.total)
    // }
    //
    // canAfford ({ cost = 0 } = {}) {
    //   return this.total >= cost
    // }
    //
    // increment (obj = this) {
    //   if (this.canAfford(obj)) {
    //     const { amount, cost = 0 } = obj
    //     this.total -= cost
    //     obj.total += amount
    //   }
    // }
    //
    // incrementMultiplier () {
    //   const { amount, cost } = this.multiplier
    //   this.multiplier.total += amount
    //   this.total -= cost
    // }
  }

export const baseApp = {
  templateUrl,
  controller,
  controllerAs: 'app'
}

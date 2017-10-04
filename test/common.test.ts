// adjacent-overload-signatures
interface IAdjacentOverloadSignatures {
  a(): void
  b(): void
  a(x: string): void
}

// ban-types
const obj2: {}
const arr: Array
const bool: Boolean
const num: Number
const obj: Object
const str: String
const fn: Function

// curly
if (true) return
for (x in [-1, 0, 1]) return x

// import-blacklist
import 'lodash'

// semicolon
const semicolon: number = 1;

// member-access
class MemberAccess {
  constructor() {}
  get a(): void {}
  get b(): void {}
  method(): void {}
}

// member-ordering
class MemberOrdering {
  constructor() {}
  private propa: string
  public propb: string
  protected propc: string
  public static propsa: string
  private static propsb: string
  protected static propsc: string
  private methodb(): void {}
  public methoda(): void {}
  protected methodc(): void {}
  public static methodsa(): void {}
  private static methodsb(): void {}
  protected static methodsc(): void {}
}

// no-any
const any: any

// no-import-side-effect
import "./helpers/side-effect-import"
import "rxjs/add/operator/filter"
import "rxjs/add/observable/bindCallback"
import "rxjs"

// typedef
const untypedFn = () => 'foo'
function callback(callbackHandler: () => string): void {}
callback(() => 'foo')
const func = (app: object) => {
  // something
}

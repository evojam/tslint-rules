// adjacent-overload-signatures
interface IAdjacentOverloadSignatures {
  a()
  b()
  a(x: string)
}

// ban-types
const obj2: {}
const arr: Array
const bool: Boolean
const num: Number
const obj: Object
const str: String

// semicolon
const semicolon = 1;

// member-access
class MemberAccess {
  constructor() {}
  get a() {}
  get b() {}
  method() {}
}

// member-ordering
class MemberOrdering {
  constructor() {}
  private propa
  public propb
  protected propc
  public static propsa
  private static propsb
  protected static propsc
  private methodb() {}
  public methoda() {}
  protected methodc() {}
  public static methodsa() {}
  private static methodsb() {}
  protected static methodsc() {}
}

// no-any
const any: any

// no-import-side-effect
import "./helpers/side-effect-import"
import "rxjs/add/operator/filter"
import "rxjs/add/observable/bindCallback"
import "rxjs"

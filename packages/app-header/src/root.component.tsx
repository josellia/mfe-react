//@ts-ignore
import { Navigate } from "@deva/util-ui";


export default function Root(props) {
  return (
  <section>
    <nav>
    <Navigate path="/account">Conta</Navigate>
    <Navigate path="/cart">Carrinho</Navigate>
    <Navigate path="/product">Produto</Navigate>
    <Navigate path="/shop">Shop</Navigate>
    </nav>
  </section>

  ) 
}

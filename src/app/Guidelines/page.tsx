import Button from "@/components/Button";
import { ResponsabilityTerm } from "@/modules/ResponseTerm";
import Link from "next/link";

export default function Guidelines() {
  return(
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-red-500 text-2xl">
          <strong>Atenção!</strong>
        </h1>
        <p>
          O acampante deverá ler e concordar com o TERMO DE CIÊNCIA E RESPONSABILIDADE, sem o qual a participação não será permitida.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg">
          <strong>NÃO ESQUEÇA DE LEVAR NA MOCHILA</strong>
        </h2>
        <p>
          Documento de identidade, Bíblia, roupa de cama, travesseiro, cobertor, toalha de banho, material de higiene pessoal, chinelo, remédio de uso diário (se necessário), repelente, protetor solar. Além das roupas para uso diário, levar um par de tênis velho, blusa, uma calça velha e biscoitos.
          VENHA COM MUITA DISPOSIÇÃO E CORAGEM!
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg">
          <strong>TERMO DE CIÊNCIA E RESPONSABILIDADE</strong>
        </h2>
        <ul className="space-y-3 font-medium">
          {ResponsabilityTerm.map((index, id) => 
            <li key={id}>
              {index.listItem}
            </li> 
          )}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="Accept with Responsability Terms"><strong>Li e concordo com os termos citados a cima</strong></label>
        <input type="checkbox" name="checkbox" id="checkbox"/>
      </div>
      <div  className="flex justify-center">
        <Link href={'/Subscribe'}>
          <Button>Inscreva-se</Button>
        </Link>
      </div>
    </section>
  )
}
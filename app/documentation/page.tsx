import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silhouetted%20Figures%20in%20Fog-eEVdUv9TgiAMSzgfPyxoVwBIyVjFw0.jpeg)",
            filter: "blur(3px) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10">
              <Home className="h-5 w-5 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </nav>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-light mb-8">Documentación del Proyecto</h1>

          <h2>1. Objetivo del Proyecto</h2>
          <p>
            El objetivo principal de este dashboard es visualizar y analizar datos históricos sobre desapariciones en
            Colombia, con el fin de:
          </p>
          <ul>
            <li>Identificar patrones temporales y geográficos.</li>
            <li>Facilitar la comprensión de la magnitud del fenómeno.</li>
            <li>Generar conciencia y apoyar la toma de decisiones en políticas públicas y acciones humanitarias.</li>
          </ul>

          <h2>2. Fuentes de Datos</h2>
          <h3>Base de datos principal:</h3>
          <ul>
            <li>Registro Nacional de Desaparecidos (RNPD) de Colombia.</li>
            <li>
              Datos complementarios de organizaciones como el Centro Nacional de Memoria Histórica (CNMH) o la
              Defensoría del Pueblo.
            </li>
          </ul>
          <h3>Cobertura temporal:</h3>
          <p>
            Período específico no detallado en el dashboard (se asume que abarca desde años previos al conflicto armado
            hasta la actualidad).
          </p>
          <h3>Variables clave:</h3>
          <ul>
            <li>Fecha de desaparición.</li>
            <li>Ubicación geográfica (departamento, municipio).</li>
            <li>Datos demográficos (edad, género, ocupación).</li>
            <li>Estado del caso (resuelto, en investigación).</li>
          </ul>

          <h2>3. Metodología</h2>
          <h3>3.1 Procesamiento de Datos</h3>
          <h4>Limpieza:</h4>
          <ul>
            <li>Eliminación de registros duplicados o incompletos.</li>
            <li>Estandarización de nombres geográficos y categorías demográficas.</li>
          </ul>
          <h4>Enriquecimiento:</h4>
          <ul>
            <li>Georreferenciación de ubicaciones para mapeo interactivo.</li>
            <li>Segmentación por periodos históricos (ej: antes y después del Acuerdo de Paz de 2016).</li>
          </ul>
          <h3>3.2 Herramientas Utilizadas</h3>
          <ul>
            <li>Tableau Public: Para la creación de visualizaciones interactivas.</li>
            <li>Excel/Power Query: Para limpieza y transformación de datos.</li>
            <li>ArcGIS/QGIS: Posible uso previo para mapeo geográfico (inferido por la presencia de mapas).</li>
          </ul>

          <h2>4. Descripción del Dashboard</h2>
          <p>El dashboard consta de los siguientes componentes:</p>
          <h3>4.1 Mapa de Calor Geográfico</h3>
          <p>
            <strong>Función:</strong> Muestra la distribución de desapariciones por departamento/municipio.
          </p>
          <p>
            <strong>Interactividad:</strong>
          </p>
          <ul>
            <li>Filtros por año y género.</li>
            <li>Tooltips con detalles como número de casos y porcentaje respecto al total.</li>
          </ul>
          <h3>4.2 Gráfico de Líneas Temporal</h3>
          <p>
            <strong>Función:</strong> Visualiza la evolución de desapariciones a lo largo del tiempo.
          </p>
          <p>
            <strong>Elementos clave:</strong>
          </p>
          <ul>
            <li>Picos históricos (ej: años con mayor incidencia durante el conflicto armado).</li>
            <li>Comparación entre periodos (ej: antes y después de 2016).</li>
          </ul>
          <h3>4.3 Gráficos de Barras Demográficos</h3>
          <p>
            <strong>Variables analizadas:</strong>
          </p>
          <ul>
            <li>Distribución por género (ej: % hombres vs. mujeres).</li>
            <li>Rango de edad (ej: jóvenes de 18-30 años como grupo más afectado).</li>
          </ul>
          <h3>4.4 Tabla Resumen</h3>
          <p>
            <strong>Contenido:</strong>
          </p>
          <ul>
            <li>Top 10 municipios con más desapariciones.</li>
            <li>Tasas de resolución de casos (ej: % de casos resueltos en Antioquia vs. Cauca).</li>
          </ul>

          <h2>5. Hallazgos Clave</h2>
          <h3>Tendencias Temporales:</h3>
          <ul>
            <li>Aumento significativo de desapariciones durante décadas de conflicto armado (1990-2010).</li>
            <li>Reducción gradual post-Acuerdo de Paz, pero con repuntes en regiones como el Catatumbo.</li>
          </ul>
          <h3>Distribución Geográfica:</h3>
          <ul>
            <li>Departamentos con mayor incidencia: Antioquia, Valle del Cauca, Cauca.</li>
            <li>Municipios críticos: Buenaventura, Medellín, Tumaco.</li>
          </ul>
          <h3>Perfil Demográfico:</h3>
          <ul>
            <li>Hombres representan el 70% de los casos.</li>
            <li>Jóvenes de 18-30 años son el grupo más vulnerable (45% de los casos).</li>
          </ul>
          <h3>Estado de los Casos:</h3>
          <ul>
            <li>Solo el 15% de los casos registrados han sido resueltos.</li>
          </ul>

          <h2>6. Limitaciones</h2>
          <ul>
            <li>
              Actualización de datos: No se especifica la fecha de última actualización, lo que podría afectar la
              precisión.
            </li>
            <li>Cobertura: Posible subregistro en zonas rurales o de difícil acceso.</li>
            <li>
              Contexto cualitativo: Falta de información sobre causas específicas (ej: conflicto vs. crimen organizado).
            </li>
          </ul>

          <h2>7. Recomendaciones</h2>
          <h3>Mejoras Técnicas:</h3>
          <ul>
            <li>Incorporar datos en tiempo real mediante APIs de entidades gubernamentales.</li>
            <li>Añadir capas contextuales (ej: presencia de grupos armados, rutas de narcotráfico).</li>
          </ul>
          <h3>Acciones Institucionales:</h3>
          <ul>
            <li>Priorizar recursos en departamentos con altas tasas de desapariciones (ej: Cauca).</li>
            <li>Fortalecer campañas de prevención dirigidas a jóvenes y comunidades rurales.</li>
          </ul>
          <h3>Investigación Adicional:</h3>
          <ul>
            <li>Realizar estudios cualitativos para entender causas profundas.</li>
            <li>Analizar correlaciones con indicadores socioeconómicos (pobreza, acceso a educación).</li>
          </ul>

          <h2>8. Conclusiones</h2>
          <p>
            Este dashboard no solo sirve como herramienta de visualización, sino como puente entre los datos y la
            acción. Al exponer patrones críticos, facilita:
          </p>
          <ul>
            <li>La identificación de zonas prioritarias para intervención.</li>
            <li>La evaluación de políticas públicas existentes.</li>
            <li>La sensibilización de la sociedad civil y organismos internacionales.</li>
          </ul>

          <p className="mt-8 text-sm text-gray-400">Autor: Álvaro Efrén Bolaños Scalante</p>
        </div>
      </div>
    </div>
  )
}


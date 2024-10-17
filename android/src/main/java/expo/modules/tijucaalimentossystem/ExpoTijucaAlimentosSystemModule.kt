  package expo.modules.tijucaalimentossystem

  import expo.modules.kotlin.modules.Module
  import expo.modules.kotlin.modules.ModuleDefinition
  
  class ExpoTijucaAlimentosSystemModule : Module() {
    override fun definition() = ModuleDefinition {
      Name("ExpoTijucaAlimentosSystem")
  
      Function("getTheme") {
        return@Function "system"
      }
    }
  }
  
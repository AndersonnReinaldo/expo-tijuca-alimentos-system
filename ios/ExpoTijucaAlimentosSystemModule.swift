import ExpoModulesCore

public class ExpoTijucaAlimentosSystemModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoTijucaAlimentosSystem")

    Function("getTheme") { () -> String in
      "system"
    }
  }
}
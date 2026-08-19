#ifdef _WIN32

#include "AppController.h"

#include <windows.h>

int WINAPI wWinMain(HINSTANCE instance, HINSTANCE, PWSTR, int show_command) {
  SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);
  AppController app;
  return app.Run(instance, show_command);
}

#else
int main() { return 0; }
#endif

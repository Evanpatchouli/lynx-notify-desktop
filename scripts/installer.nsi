Unicode true
RequestExecutionLevel user
ManifestDPIAware true
!include "MUI2.nsh"
!include "x64.nsh"

!define APP "Lynx Notify"
!define UNINSTALL_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\LynxNotify"
Name "${APP}"
OutFile "${SETUP_FILE}"
InstallDir "$LOCALAPPDATA\Programs\Lynx Notify"
InstallDirRegKey HKCU "${UNINSTALL_KEY}" "InstallLocation"
SetCompressor /SOLID lzma
VIProductVersion "${VERSION}.0"
VIAddVersionKey "ProductName" "${APP}"
VIAddVersionKey "FileDescription" "${APP} Setup"
VIAddVersionKey "FileVersion" "${VERSION}"
VIAddVersionKey "ProductVersion" "${VERSION}"
VIAddVersionKey "LegalCopyright" " "
!define MUI_ICON "${APP_ICON}"
!define MUI_UNICON "${APP_ICON}"
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!define MUI_FINISHPAGE_RUN "$INSTDIR\LynxNotify.exe"
!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_LANGUAGE "SimpChinese"

Function .onInit
  ${IfNot} ${RunningX64}
    MessageBox MB_OK|MB_ICONSTOP "Lynx Notify 需要 64 位 Windows。" /SD IDOK
    SetErrorLevel 1
    Quit
  ${EndIf}
FunctionEnd

!macro CheckAppClosed
  IfFileExists "$INSTDIR\LynxNotify.exe" 0 ready
  retry:
    ClearErrors
    FileOpen $0 "$INSTDIR\LynxNotify.exe" a
    IfErrors 0 closed
    MessageBox MB_RETRYCANCEL|MB_ICONEXCLAMATION "请先从系统托盘退出 Lynx Notify，再重试。" /SD IDCANCEL IDRETRY retry
    SetErrorLevel 1
    Quit
  closed:
    FileClose $0
  ready:
!macroend

Section "Install"
  !insertmacro CheckAppClosed
  SetOutPath "$INSTDIR"
  File /r "${PAYLOAD}\*"
  WriteUninstaller "$INSTDIR\Uninstall.exe"
  CreateShortcut "$SMPROGRAMS\Lynx Notify.lnk" "$INSTDIR\LynxNotify.exe"
  WriteRegStr HKCU "${UNINSTALL_KEY}" "DisplayName" "${APP}"
  WriteRegStr HKCU "${UNINSTALL_KEY}" "DisplayVersion" "${VERSION}"
  WriteRegStr HKCU "${UNINSTALL_KEY}" "DisplayIcon" "$INSTDIR\LynxNotify.exe"
  WriteRegStr HKCU "${UNINSTALL_KEY}" "InstallLocation" "$INSTDIR"
  WriteRegStr HKCU "${UNINSTALL_KEY}" "UninstallString" '"$INSTDIR\Uninstall.exe"'
  WriteRegDWORD HKCU "${UNINSTALL_KEY}" "NoModify" 1
  WriteRegDWORD HKCU "${UNINSTALL_KEY}" "NoRepair" 1
SectionEnd

Section "Uninstall"
  !insertmacro CheckAppClosed
  !include "${UNINSTALL_FILES}"
  Delete "$INSTDIR\Uninstall.exe"
  RMDir "$INSTDIR"
  ReadRegStr $0 HKCU "${UNINSTALL_KEY}" "InstallLocation"
  ${If} $0 == $INSTDIR
    Delete "$SMPROGRAMS\Lynx Notify.lnk"
    DeleteRegKey HKCU "${UNINSTALL_KEY}"
  ${EndIf}
SectionEnd

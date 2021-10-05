export const mappings = {
  "commit": {
    "id": "5373836",
    "fullId": "53738361ada7f9681785d2cdb07836d1602f595c",
    "filePath": "lunar/ax/llIlIIllIIllIIlIIIlIllllI"
  },
  "LTFolder": [
    "Scripts\\",
    "Scripts\\checkCommitId.txt",
    "Scripts\\replace1.txt",
    "Scripts\\replace2.txt",
    "Temp\\",
    "Temp\\file.txt",
    "assembly.txt",
    "recaf.jar"
  ],
  "patchs": {
    "freelook": [
      {
        "patchType": "replace",
        "scripts": {
          "searchFor": "replace1.txt",
          "replaceWith": "replace2.txt"
        },
        "path": "lunar/dC/lllllllllIIIlIIllllllIIll",
        "methodName": "llIlIIllIIllIIlIIIlIllllI(Lcom/google/gson/JsonObject;Ljava/util/function/Predicate;Llunar/aS/IllllllIllIIllIIlIIlllIlI;)V",
        "searchFor": "LDC \"enabled\"",
        "replaceWith": "LDC \"removedByLunarTweaks\""
      }
    ],
    "pinnedServers": [
      {
        "patchType": "replace",
        "scripts": {
          "searchFor": "replace1.txt",
          "replaceWith": "replace2.txt"
        },
        "path": "lunar/dC/lllllllllIIIlIIllllllIIll",
        "methodName": "run()V",
        "searchFor": "LDC \"pinnedServers\"",
        "replaceWith": "LDC \"removedByLunarTweaks\""
      }
    ],
    "modspacket": [
      {
        "patchType": "replace",
        "scripts": {
          "searchFor": "replace1.txt",
          "replaceWith": "replace2.txt"
        },
        "path": "com/lunarclient/bukkitapi/nethandler/LCPacket",
        "methodName": "<clinit>()V",
        "searchFor": "AD:\nLINE AD 56\nBIPUSH 31\nLDC Lcom/lunarclient/bukkitapi/nethandler/client/LCPacketModSettings;\nINVOKESTATIC com/lunarclient/bukkitapi/nethandler/LCPacket.addPacket(ILjava/lang/Class;)V\nAE:",
        "replaceWith": "AE:"
      }
    ]
  }
}

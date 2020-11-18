# Migration `20201118135002`

This migration has been generated by elPaleniozord at 11/18/2020, 2:50:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."users_data" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "goal" DROP NOT NULL,
ALTER COLUMN "kcal" DROP NOT NULL,
ALTER COLUMN "prot" DROP NOT NULL,
ALTER COLUMN "carb" DROP NOT NULL,
ALTER COLUMN "fats" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201111120011-user-data..20201118135002
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -52,9 +52,9 @@
   updatedAt     DateTime  @default(now()) @map(name: "updated_at")
   role          Role      @default(USER)
   userData      UserData?  
   logs          Log[]
-  favorites     Favorite[] 
+  favorites     Favorite[]
   @@map(name: "users")
 }
@@ -69,20 +69,20 @@
   @@map(name: "verification_requests")
 }
 model UserData {
-  id Int @default(autoincrement()) @id
-  user User @relation(fields: [userId], references: [email])
-  userId String
-  height Int
-  weight Int
-  age Int
-  gender Gender
-  goal String
-  kcal Int
-  prot Int
-  carb Int
-  fats Int
+  id          Int     @default(autoincrement()) @id
+  user        User?    @relation(fields: [userId], references: [email])
+  userId      String?
+  height      Int?
+  weight      Int?
+  age         Int?
+  gender      Gender?
+  goal        String?
+  kcal        Int?
+  prot        Int?
+  carb        Int?
+  fats        Int?
   @@map(name: "users_data")
 }
```


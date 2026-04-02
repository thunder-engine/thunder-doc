.. _api_AssetConverterSettings:

AssetConverterSettings
======================

Inherited: None

.. _api_AssetConverterSettings_description:

Description
-----------

The AssetConverterSettings class provides configuration and state management for asset conversion processes. It handles metadata storage, version control, and file management for converted assets.



.. _api_AssetConverterSettings_public:

Public Methods
--------------

+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`absoluteDestination<api_AssetConverterSettings_a1069eb3>` () const                                                 |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`AssetConverter<api_AssetConverter>` * | :ref:`converter<api_AssetConverterSettings_52e3fcd7>` ()                                                                 |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`currentVersion<api_AssetConverterSettings_54d9162f>` () const                                                      |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`defaultIconPath<api_AssetConverterSettings_491b8d0c>` (const TString & type)                                       |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`destination<api_AssetConverterSettings_3ab2e741>` () const                                                         |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`hash<api_AssetConverterSettings_a6415bef>` () const                                                                |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                   int | :ref:`icon<api_AssetConverterSettings_3b6af72c>` (const TString & uuid)                                                  |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isCode<api_AssetConverterSettings_1da73f06>` () const                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isDir<api_AssetConverterSettings_0b16a832>` () const                                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isModified<api_AssetConverterSettings_0294678a>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isOutdated<api_AssetConverterSettings_2610a35c>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isReadOnly<api_AssetConverterSettings_e1724586>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`loadSettings<api_AssetConverterSettings_f7920d8c>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`saveSettings<api_AssetConverterSettings_c8a107d4>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setConverter<api_AssetConverterSettings_c9284a53>` (AssetConverter * converter)                                    |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setCurrentVersion<api_AssetConverterSettings_97c40236>` (uint32_t  version)                                        |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setDirectory<api_AssetConverterSettings_cf56de4b>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setModified<api_AssetConverterSettings_62a4db17>` ()                                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSource<api_AssetConverterSettings_23f798ab>` (const TString & source)                                           |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItem<api_AssetConverterSettings_3e51b206>` (const TString & name, const ResourceSystem::ResourceInfo & info) |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItemData<api_AssetConverterSettings_fdc9410a>` (const TString & name, const Variant & data)                  |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItemsDirty<api_AssetConverterSettings_a1eb420f>` ()                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setVersion<api_AssetConverterSettings_4a093e16>` (uint32_t  version)                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`source<api_AssetConverterSettings_7c0f81b3>` () const                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem_ResourceInfo>` | :ref:`subItem<api_AssetConverterSettings_125c87f3>` (const TString & key, bool  create = false) const                    |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`Variant<api_Variant>` | :ref:`subItemData<api_AssetConverterSettings_814b3f97>` (const TString & key) const                                      |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                      const StringList | :ref:`subKeys<api_AssetConverterSettings_2ad9634b>` () const                                                             |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`type<api_AssetConverterSettings_58e962ad>` () const                                                                |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`typeName<api_AssetConverterSettings_f63ad948>` () const                                                            |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                            StringList | :ref:`typeNames<api_AssetConverterSettings_7df98230>` () const                                                           |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`version<api_AssetConverterSettings_d193bce5>` () const                                                             |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+



.. _api_AssetConverterSettings_static:

Static Methods
--------------

+-------+-------------------------------------------------------------------------------------------------------------+
|   int | :ref:`documentIcon<api_AssetConverterSettings_153a9f2e>` (const TString & type)                             |
+-------+-------------------------------------------------------------------------------------------------------------+
|  void | :ref:`setDefaultIconPath<api_AssetConverterSettings_284cedfa>` (const TString & type, const TString & path) |
+-------+-------------------------------------------------------------------------------------------------------------+

.. _api_AssetConverterSettings_methods:

Methods Description
-------------------

.. _api_AssetConverterSettings_a1069eb3:

 :ref:`TString<api_TString>`  **AssetConverterSettings::absoluteDestination** () const

Returns the absolute destination file path.

----

.. _api_AssetConverterSettings_52e3fcd7:

 :ref:`AssetConverter<api_AssetConverter>` * **AssetConverterSettings::converter** ()

Returns assotiated AssetConverter.

**See also** setConverter().

----

.. _api_AssetConverterSettings_54d9162f:

 uint32_t **AssetConverterSettings::currentVersion** () const

Returns the current asset format version.

**See also** setCurrentVersion().

----

.. _api_AssetConverterSettings_491b8d0c:

 :ref:`TString<api_TString>`  **AssetConverterSettings::defaultIconPath** (:ref:`TString<api_TString>` & *type*)

Returns path to default icon for asset *type* (default returns ":/Style/styles/dark/images/unknown.svg").

**See also** setDefaultIconPath().

----

.. _api_AssetConverterSettings_3ab2e741:

 :ref:`TString<api_TString>`  **AssetConverterSettings::destination** () const

Returns the destination file path (relative).

----

.. _api_AssetConverterSettings_153a9f2e:

 int **AssetConverterSettings::documentIcon** (:ref:`TString<api_TString>` & *type*)

Returns icon associated with document type.

----

.. _api_AssetConverterSettings_a6415bef:

 :ref:`TString<api_TString>`  **AssetConverterSettings::hash** () const

Returns the md5 checksum of the source file (formatted as a GUID-like string).

----

.. _api_AssetConverterSettings_3b6af72c:

 int **AssetConverterSettings::icon** (:ref:`TString<api_TString>` & *uuid*)

Returns icon assotiatited with current asset uuid.

----

.. _api_AssetConverterSettings_1da73f06:

 bool **AssetConverterSettings::isCode** () const

Returns whether this asset represents code (default returns false).

----

.. _api_AssetConverterSettings_0b16a832:

 bool **AssetConverterSettings::isDir** () const

Returns true if asset represents directory; otherwise returns false.

----

.. _api_AssetConverterSettings_0294678a:

 bool **AssetConverterSettings::isModified** () const

Returns true if import setting has been modified; otherwise return false.

----

.. _api_AssetConverterSettings_2610a35c:

 bool **AssetConverterSettings::isOutdated** () const

Returns true if the asset needs to be reimported; otherwise returns false. This method compares asset version, file md5 checksum or file existance.

----

.. _api_AssetConverterSettings_e1724586:

 bool **AssetConverterSettings::isReadOnly** () const

Returns true if asset cannot be cahnged using any embedded editor; returns true by the default.

----

.. _api_AssetConverterSettings_f7920d8c:

 bool **AssetConverterSettings::loadSettings** ()

Loads asset settings from the metadata file.

This method reads the settings from a metadata file located at "[source].[ext]", where [ext] is defined by gMetaExt (typically "set"). The metadata file contains all meta-information and import settings for an asset in the Content directory.

Returns true if settings was successfully loaded; otherwise returns false.

----

.. _api_AssetConverterSettings_c8a107d4:

 void **AssetConverterSettings::saveSettings** ()

Saves current import settings to metadata file to ([source].set) file. Serializes properties via reflection, version and hash information and stores sub items information in JSON format.

----

.. _api_AssetConverterSettings_c9284a53:

 void **AssetConverterSettings::setConverter** (:ref:`AssetConverter<api_AssetConverter>` * *converter*)

Sets assotiated asset converter.

**See also** converter().

----

.. _api_AssetConverterSettings_97c40236:

 void **AssetConverterSettings::setCurrentVersion** (uint32_t  *version*)

Sets the current asset format version.

**See also** currentVersion().

----

.. _api_AssetConverterSettings_284cedfa:

 void **AssetConverterSettings::setDefaultIconPath** (:ref:`TString<api_TString>` & *type*, :ref:`TString<api_TString>` & *path*)

Adds a new *path* default icon for the asset type.


**Note:** Icon must be in SVG format.


**See also** defaultIconPath().

----

.. _api_AssetConverterSettings_cf56de4b:

 void **AssetConverterSettings::setDirectory** ()

Marks the asset as directory.

----

.. _api_AssetConverterSettings_62a4db17:

 void **AssetConverterSettings::setModified** ()

Marks the asset as modified. This allows to user decide to save setting and re-import the asset or revert the settings back.

**See also** isModified().

----

.. _api_AssetConverterSettings_23f798ab:

 void **AssetConverterSettings::setSource** (:ref:`TString<api_TString>` & *source*)

Sets the *source* file path.

**See also** source().

----

.. _api_AssetConverterSettings_3e51b206:

 void **AssetConverterSettings::setSubItem** (:ref:`TString<api_TString>` & *name*, :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem_ResourceInfo>` & *info*)

Sets a sub-item with name, info.

**See also** subItem().

----

.. _api_AssetConverterSettings_fdc9410a:

 void **AssetConverterSettings::setSubItemData** (:ref:`TString<api_TString>` & *name*, :ref:`Variant<api_Variant>` & *data*)

Sets additional *data* for a sub-item with given *name* (default does nothing).

**See also** subItemData().

----

.. _api_AssetConverterSettings_a1eb420f:

 void **AssetConverterSettings::setSubItemsDirty** ()

Marks all sub-items as dirty (modified).

----

.. _api_AssetConverterSettings_4a093e16:

 void **AssetConverterSettings::setVersion** (uint32_t  *version*)

Sets the asset converter asset format version.

**See also** version().

----

.. _api_AssetConverterSettings_7c0f81b3:

 :ref:`TString<api_TString>`  **AssetConverterSettings::source** () const

Returns the source file path.

**See also** setSource().

----

.. _api_AssetConverterSettings_125c87f3:

 :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem::ResourceInfo>`  **AssetConverterSettings::subItem** (:ref:`TString<api_TString>` & *key*, bool  *create* = false) const

Returns the resource information for a sub-item identified by key.

This method retrieves the ResourceInfo associated with the given sub-item key. If the sub-item doesn't exist and *create* is true, a new sub-item is created with a generated UUID and the parent's MD5 hash.

**See also** setSubItem().

----

.. _api_AssetConverterSettings_814b3f97:

 :ref:`Variant<api_Variant>`  **AssetConverterSettings::subItemData** (:ref:`TString<api_TString>` & *key*) const

Returns additional data for a sub-item by it's *key* (default returns empty object).

**See also** setSubItemData().

----

.. _api_AssetConverterSettings_2ad9634b:

const StringList **AssetConverterSettings::subKeys** () const

Returns list of all sub-item keys.

----

.. _api_AssetConverterSettings_58e962ad:

 uint32_t **AssetConverterSettings::type** () const

Returns the asset type for conversion for more details see MetaType.

----

.. _api_AssetConverterSettings_f63ad948:

 :ref:`TString<api_TString>`  **AssetConverterSettings::typeName** () const

Reimplements: Object::typeName() const.

Returns primary type name (first from typeNames()).

----

.. _api_AssetConverterSettings_7df98230:

 StringList **AssetConverterSettings::typeNames** () const

Returns list of type names for this asset (default returns "Invalid" if type is invalid).

----

.. _api_AssetConverterSettings_d193bce5:

 uint32_t **AssetConverterSettings::version** () const

Returns the asset converter asset format version.

**See also** setVersion().



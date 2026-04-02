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
|                                           :ref:`TString<api_TString>` | :ref:`absoluteDestination<api_AssetConverterSettings_8c317e9b>` () const                                                 |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`AssetConverter<api_AssetConverter>` * | :ref:`converter<api_AssetConverterSettings_0f816ac3>` ()                                                                 |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`currentVersion<api_AssetConverterSettings_d21604ab>` () const                                                      |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`defaultIconPath<api_AssetConverterSettings_309f687b>` (const TString & type)                                       |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`destination<api_AssetConverterSettings_24fd1b50>` () const                                                         |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`hash<api_AssetConverterSettings_da13967b>` () const                                                                |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                   int | :ref:`icon<api_AssetConverterSettings_75a39804>` (const TString & uuid)                                                  |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isCode<api_AssetConverterSettings_1c57e2d9>` () const                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isDir<api_AssetConverterSettings_f8e93d6a>` () const                                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isModified<api_AssetConverterSettings_273d61b9>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isOutdated<api_AssetConverterSettings_7a5debc6>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isReadOnly<api_AssetConverterSettings_fa7b0d16>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`loadSettings<api_AssetConverterSettings_236bacf8>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`saveSettings<api_AssetConverterSettings_086d973f>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setConverter<api_AssetConverterSettings_27084a13>` (AssetConverter * converter)                                    |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setCurrentVersion<api_AssetConverterSettings_e814c5ba>` (uint32_t  version)                                        |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setDirectory<api_AssetConverterSettings_bc6743a9>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setModified<api_AssetConverterSettings_016ec287>` ()                                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSource<api_AssetConverterSettings_061df278>` (const TString & source)                                           |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItem<api_AssetConverterSettings_a209d65c>` (const TString & name, const ResourceSystem::ResourceInfo & info) |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItemData<api_AssetConverterSettings_14f803ab>` (const TString & name, const Variant & data)                  |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItemsDirty<api_AssetConverterSettings_9c6bde7a>` ()                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setVersion<api_AssetConverterSettings_df42e305>` (uint32_t  version)                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`source<api_AssetConverterSettings_4f53eda0>` () const                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem_ResourceInfo>` | :ref:`subItem<api_AssetConverterSettings_d37ea016>` (const TString & key, bool  create = false) const                    |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`Variant<api_Variant>` | :ref:`subItemData<api_AssetConverterSettings_04b259e8>` (const TString & key) const                                      |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                               const :ref:`StringList<api_StringList>` | :ref:`subKeys<api_AssetConverterSettings_d7e4b89c>` () const                                                             |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`type<api_AssetConverterSettings_539eb2fc>` () const                                                                |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`typeName<api_AssetConverterSettings_9f842a71>` () const                                                            |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                     :ref:`StringList<api_StringList>` | :ref:`typeNames<api_AssetConverterSettings_cad3e781>` () const                                                           |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`version<api_AssetConverterSettings_d84603b5>` () const                                                             |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+



.. _api_AssetConverterSettings_static:

Static Methods
--------------

+-------+-------------------------------------------------------------------------------------------------------------+
|   int | :ref:`documentIcon<api_AssetConverterSettings_f651deab>` (const TString & type)                             |
+-------+-------------------------------------------------------------------------------------------------------------+
|  void | :ref:`setDefaultIconPath<api_AssetConverterSettings_582b06af>` (const TString & type, const TString & path) |
+-------+-------------------------------------------------------------------------------------------------------------+

.. _api_AssetConverterSettings_methods:

Methods Description
-------------------

.. _api_AssetConverterSettings_8c317e9b:

 :ref:`TString<api_TString>`  **AssetConverterSettings::absoluteDestination** () const

Returns the absolute destination file path.

----

.. _api_AssetConverterSettings_0f816ac3:

 :ref:`AssetConverter<api_AssetConverter>` * **AssetConverterSettings::converter** ()

Returns assotiated AssetConverter.

**See also** setConverter().

----

.. _api_AssetConverterSettings_d21604ab:

 uint32_t **AssetConverterSettings::currentVersion** () const

Returns the current asset format version.

**See also** setCurrentVersion().

----

.. _api_AssetConverterSettings_309f687b:

 :ref:`TString<api_TString>`  **AssetConverterSettings::defaultIconPath** (:ref:`TString<api_TString>` & *type*)

Returns path to default icon for asset *type* (default returns ":/Style/styles/dark/images/unknown.svg").

**See also** setDefaultIconPath().

----

.. _api_AssetConverterSettings_24fd1b50:

 :ref:`TString<api_TString>`  **AssetConverterSettings::destination** () const

Returns the destination file path (relative).

----

.. _api_AssetConverterSettings_f651deab:

 int **AssetConverterSettings::documentIcon** (:ref:`TString<api_TString>` & *type*)

Returns icon associated with document *type*.

----

.. _api_AssetConverterSettings_da13967b:

 :ref:`TString<api_TString>`  **AssetConverterSettings::hash** () const

Returns the md5 checksum of the source file (formatted as a GUID-like string).

----

.. _api_AssetConverterSettings_75a39804:

 int **AssetConverterSettings::icon** (:ref:`TString<api_TString>` & *uuid*)

Returns icon assotiatited with current asset *uuid*.

----

.. _api_AssetConverterSettings_1c57e2d9:

 bool **AssetConverterSettings::isCode** () const

Returns whether this asset represents code (default returns false).

----

.. _api_AssetConverterSettings_f8e93d6a:

 bool **AssetConverterSettings::isDir** () const

Returns true if asset represents directory; otherwise returns false.

----

.. _api_AssetConverterSettings_273d61b9:

 bool **AssetConverterSettings::isModified** () const

Returns true if import setting has been modified; otherwise return false.

----

.. _api_AssetConverterSettings_7a5debc6:

 bool **AssetConverterSettings::isOutdated** () const

Returns true if the asset needs to be reimported; otherwise returns false. This method compares asset version, file md5 checksum or file existance.

----

.. _api_AssetConverterSettings_fa7b0d16:

 bool **AssetConverterSettings::isReadOnly** () const

Returns true if asset cannot be cahnged using any embedded editor; returns true by the default.

----

.. _api_AssetConverterSettings_236bacf8:

 bool **AssetConverterSettings::loadSettings** ()

Loads asset settings from the metadata file.

This method reads the settings from a metadata file located at "[source].[ext]", where [ext] is defined by gMetaExt (typically "set"). The metadata file contains all meta-information and import settings for an asset in the Content directory.

Returns true if settings was successfully loaded; otherwise returns false.

----

.. _api_AssetConverterSettings_086d973f:

 void **AssetConverterSettings::saveSettings** ()

Saves current import settings to metadata file to ([source].set) file. Serializes properties via reflection, version and hash information and stores sub items information in JSON format.

----

.. _api_AssetConverterSettings_27084a13:

 void **AssetConverterSettings::setConverter** (:ref:`AssetConverter<api_AssetConverter>` * *converter*)

Sets assotiated asset *converter*.

**See also** *converter*().

----

.. _api_AssetConverterSettings_e814c5ba:

 void **AssetConverterSettings::setCurrentVersion** (uint32_t  *version*)

Sets the current asset format *version*.

**See also** currentVersion().

----

.. _api_AssetConverterSettings_582b06af:

 void **AssetConverterSettings::setDefaultIconPath** (:ref:`TString<api_TString>` & *type*, :ref:`TString<api_TString>` & *path*)

Adds a new *path* default icon for the asset *type*.


**Note:** Icon must be in SVG format.


**See also** defaultIconPath().

----

.. _api_AssetConverterSettings_bc6743a9:

 void **AssetConverterSettings::setDirectory** ()

Marks the asset as directory.

----

.. _api_AssetConverterSettings_016ec287:

 void **AssetConverterSettings::setModified** ()

Marks the asset as modified. This allows to user decide to save setting and re-import the asset or revert the settings back.

**See also** isModified().

----

.. _api_AssetConverterSettings_061df278:

 void **AssetConverterSettings::setSource** (:ref:`TString<api_TString>` & *source*)

Sets the *source* file path.

**See also** *source*().

----

.. _api_AssetConverterSettings_a209d65c:

 void **AssetConverterSettings::setSubItem** (:ref:`TString<api_TString>` & *name*, :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem::ResourceInfo>` & *info*)

Sets a sub-item with *name*, *info*.

**See also** subItem().

----

.. _api_AssetConverterSettings_14f803ab:

 void **AssetConverterSettings::setSubItemData** (:ref:`TString<api_TString>` & *name*, :ref:`Variant<api_Variant>` & *data*)

Sets additional *data* for a sub-item with given *name* (default does nothing).

**See also** subItemData().

----

.. _api_AssetConverterSettings_9c6bde7a:

 void **AssetConverterSettings::setSubItemsDirty** ()

Marks all sub-items as dirty (modified).

----

.. _api_AssetConverterSettings_df42e305:

 void **AssetConverterSettings::setVersion** (uint32_t  *version*)

Sets the asset converter asset format *version*.

**See also** *version*().

----

.. _api_AssetConverterSettings_4f53eda0:

 :ref:`TString<api_TString>`  **AssetConverterSettings::source** () const

Returns the source file path.

**See also** setSource().

----

.. _api_AssetConverterSettings_d37ea016:

 :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem::ResourceInfo>`  **AssetConverterSettings::subItem** (:ref:`TString<api_TString>` & *key*, bool  *create* = false) const

Returns the resource information for a sub-item identified by *key*.

This method retrieves the ResourceInfo associated with the given sub-item *key*. If the sub-item doesn't exist and *create* is true, a new sub-item is *create*d with a generated UUID and the parent's MD5 hash.

**See also** setSubItem().

----

.. _api_AssetConverterSettings_04b259e8:

 :ref:`Variant<api_Variant>`  **AssetConverterSettings::subItemData** (:ref:`TString<api_TString>` & *key*) const

Returns additional data for a sub-item by it's *key* (default returns empty object).

**See also** setSubItemData().

----

.. _api_AssetConverterSettings_d7e4b89c:

const :ref:`StringList<api_StringList>`  **AssetConverterSettings::subKeys** () const

Returns list of all sub-item keys.

----

.. _api_AssetConverterSettings_539eb2fc:

 uint32_t **AssetConverterSettings::type** () const

Returns the asset type for conversion for more details see MetaType.

----

.. _api_AssetConverterSettings_9f842a71:

 :ref:`TString<api_TString>`  **AssetConverterSettings::typeName** () const

Reimplements: Object::typeName() const.

Returns primary type name (first from typeNames()).

----

.. _api_AssetConverterSettings_cad3e781:

 :ref:`StringList<api_StringList>`  **AssetConverterSettings::typeNames** () const

Returns list of type names for this asset (default returns "Invalid" if type is invalid).

----

.. _api_AssetConverterSettings_d84603b5:

 uint32_t **AssetConverterSettings::version** () const

Returns the asset converter asset format version.

**See also** setVersion().



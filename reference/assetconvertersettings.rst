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
|                                           :ref:`TString<api_TString>` | :ref:`absoluteDestination<api_AssetConverterSettings_045be368>` () const                                                 |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`AssetConverter<api_AssetConverter>` * | :ref:`converter<api_AssetConverterSettings_92f1b0a3>` ()                                                                 |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`currentVersion<api_AssetConverterSettings_b20d37f9>` () const                                                      |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`defaultIconPath<api_AssetConverterSettings_05cf3418>` (const TString & type)                                       |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`destination<api_AssetConverterSettings_6b48e90c>` () const                                                         |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`hash<api_AssetConverterSettings_7d24905b>` () const                                                                |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                   int | :ref:`icon<api_AssetConverterSettings_7f25a0ec>` (const TString & uuid)                                                  |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isCode<api_AssetConverterSettings_a2bf1098>` () const                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isDir<api_AssetConverterSettings_acf9d04b>` () const                                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isModified<api_AssetConverterSettings_cb2f5ae1>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isOutdated<api_AssetConverterSettings_cb1ef52a>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`isReadOnly<api_AssetConverterSettings_db897410>` () const                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  bool | :ref:`loadSettings<api_AssetConverterSettings_d815f42e>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`saveSettings<api_AssetConverterSettings_438156d7>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setConverter<api_AssetConverterSettings_e69f8d23>` (AssetConverter * converter)                                    |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setCurrentVersion<api_AssetConverterSettings_c6a85bf2>` (uint32_t  version)                                        |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setDirectory<api_AssetConverterSettings_ec70946a>` ()                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setModified<api_AssetConverterSettings_ba6475f8>` ()                                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSource<api_AssetConverterSettings_cbf89724>` (const TString & source)                                           |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItem<api_AssetConverterSettings_1c4382d5>` (const TString & name, const ResourceSystem::ResourceInfo & info) |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItemData<api_AssetConverterSettings_5c13dba2>` (const TString & name, const Variant & data)                  |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setSubItemsDirty<api_AssetConverterSettings_e29daf6c>` ()                                                          |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                                  void | :ref:`setVersion<api_AssetConverterSettings_62371ecf>` (uint32_t  version)                                               |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`source<api_AssetConverterSettings_be74c1a6>` () const                                                              |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem_ResourceInfo>` | :ref:`subItem<api_AssetConverterSettings_48a1db6c>` (const TString & key, bool  create = false) const                    |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`Variant<api_Variant>` | :ref:`subItemData<api_AssetConverterSettings_5e264b98>` (const TString & key) const                                      |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                      const StringList | :ref:`subKeys<api_AssetConverterSettings_6ed703c5>` () const                                                             |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`type<api_AssetConverterSettings_892cd037>` () const                                                                |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`TString<api_TString>` | :ref:`typeName<api_AssetConverterSettings_9568a3f4>` () const                                                            |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                            StringList | :ref:`typeNames<api_AssetConverterSettings_42a530e6>` () const                                                           |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+
|                                                              uint32_t | :ref:`version<api_AssetConverterSettings_27ad86eb>` () const                                                             |
+-----------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+



.. _api_AssetConverterSettings_static:

Static Methods
--------------

+-------+-------------------------------------------------------------------------------------------------------------+
|   int | :ref:`documentIcon<api_AssetConverterSettings_b5fce743>` (const TString & type)                             |
+-------+-------------------------------------------------------------------------------------------------------------+
|  void | :ref:`setDefaultIconPath<api_AssetConverterSettings_2abc9e58>` (const TString & type, const TString & path) |
+-------+-------------------------------------------------------------------------------------------------------------+

.. _api_AssetConverterSettings_methods:

Methods Description
-------------------

.. _api_AssetConverterSettings_045be368:

 :ref:`TString<api_TString>`  **AssetConverterSettings::absoluteDestination** () const

Returns the absolute destination file path.

----

.. _api_AssetConverterSettings_92f1b0a3:

 :ref:`AssetConverter<api_AssetConverter>` * **AssetConverterSettings::converter** ()

Returns assotiated AssetConverter.

**See also** setConverter().

----

.. _api_AssetConverterSettings_b20d37f9:

 uint32_t **AssetConverterSettings::currentVersion** () const

Returns the current asset format version.

**See also** setCurrentVersion().

----

.. _api_AssetConverterSettings_05cf3418:

 :ref:`TString<api_TString>`  **AssetConverterSettings::defaultIconPath** (:ref:`TString<api_TString>` & *type*)

Returns path to default icon for asset *type* (default returns ":/Style/styles/dark/images/unknown.svg").

**See also** setDefaultIconPath().

----

.. _api_AssetConverterSettings_6b48e90c:

 :ref:`TString<api_TString>`  **AssetConverterSettings::destination** () const

Returns the destination file path (relative).

----

.. _api_AssetConverterSettings_b5fce743:

 int **AssetConverterSettings::documentIcon** (:ref:`TString<api_TString>` & *type*)

Returns icon associated with document type.

----

.. _api_AssetConverterSettings_7d24905b:

 :ref:`TString<api_TString>`  **AssetConverterSettings::hash** () const

Returns the md5 checksum of the source file (formatted as a GUID-like string).

----

.. _api_AssetConverterSettings_7f25a0ec:

 int **AssetConverterSettings::icon** (:ref:`TString<api_TString>` & *uuid*)

Returns icon assotiatited with current asset uuid.

----

.. _api_AssetConverterSettings_a2bf1098:

 bool **AssetConverterSettings::isCode** () const

Returns whether this asset represents code (default returns false).

----

.. _api_AssetConverterSettings_acf9d04b:

 bool **AssetConverterSettings::isDir** () const

Returns true if asset represents directory; otherwise returns false.

----

.. _api_AssetConverterSettings_cb2f5ae1:

 bool **AssetConverterSettings::isModified** () const

Returns true if import setting has been modified; otherwise return false.

----

.. _api_AssetConverterSettings_cb1ef52a:

 bool **AssetConverterSettings::isOutdated** () const

Returns true if the asset needs to be reimported; otherwise returns false. This method compares asset version, file md5 checksum or file existance.

----

.. _api_AssetConverterSettings_db897410:

 bool **AssetConverterSettings::isReadOnly** () const

Returns true if asset cannot be cahnged using any embedded editor; returns true by the default.

----

.. _api_AssetConverterSettings_d815f42e:

 bool **AssetConverterSettings::loadSettings** ()

Loads asset settings from the metadata file.

This method reads the settings from a metadata file located at "[source].[ext]", where [ext] is defined by gMetaExt (typically "set"). The metadata file contains all meta-information and import settings for an asset in the Content directory.

Returns true if settings was successfully loaded; otherwise returns false.

----

.. _api_AssetConverterSettings_438156d7:

 void **AssetConverterSettings::saveSettings** ()

Saves current import settings to metadata file to ([source].set) file. Serializes properties via reflection, version and hash information and stores sub items information in JSON format.

----

.. _api_AssetConverterSettings_e69f8d23:

 void **AssetConverterSettings::setConverter** (:ref:`AssetConverter<api_AssetConverter>` * *converter*)

Sets assotiated asset converter.

**See also** converter().

----

.. _api_AssetConverterSettings_c6a85bf2:

 void **AssetConverterSettings::setCurrentVersion** (uint32_t  *version*)

Sets the current asset format version.

**See also** currentVersion().

----

.. _api_AssetConverterSettings_2abc9e58:

 void **AssetConverterSettings::setDefaultIconPath** (:ref:`TString<api_TString>` & *type*, :ref:`TString<api_TString>` & *path*)

Adds a new *path* default icon for the asset type.


**Note:** Icon must be in SVG format.


**See also** defaultIconPath().

----

.. _api_AssetConverterSettings_ec70946a:

 void **AssetConverterSettings::setDirectory** ()

Marks the asset as directory.

----

.. _api_AssetConverterSettings_ba6475f8:

 void **AssetConverterSettings::setModified** ()

Marks the asset as modified. This allows to user decide to save setting and re-import the asset or revert the settings back.

**See also** isModified().

----

.. _api_AssetConverterSettings_cbf89724:

 void **AssetConverterSettings::setSource** (:ref:`TString<api_TString>` & *source*)

Sets the *source* file path.

**See also** source().

----

.. _api_AssetConverterSettings_1c4382d5:

 void **AssetConverterSettings::setSubItem** (:ref:`TString<api_TString>` & *name*, :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem_ResourceInfo>` & *info*)

Sets a sub-item with name, info.

**See also** subItem().

----

.. _api_AssetConverterSettings_5c13dba2:

 void **AssetConverterSettings::setSubItemData** (:ref:`TString<api_TString>` & *name*, :ref:`Variant<api_Variant>` & *data*)

Sets additional *data* for a sub-item with given *name* (default does nothing).

**See also** subItemData().

----

.. _api_AssetConverterSettings_e29daf6c:

 void **AssetConverterSettings::setSubItemsDirty** ()

Marks all sub-items as dirty (modified).

----

.. _api_AssetConverterSettings_62371ecf:

 void **AssetConverterSettings::setVersion** (uint32_t  *version*)

Sets the asset converter asset format version.

**See also** version().

----

.. _api_AssetConverterSettings_be74c1a6:

 :ref:`TString<api_TString>`  **AssetConverterSettings::source** () const

Returns the source file path.

**See also** setSource().

----

.. _api_AssetConverterSettings_48a1db6c:

 :ref:`ResourceSystem::ResourceInfo<api_ResourceSystem::ResourceInfo>`  **AssetConverterSettings::subItem** (:ref:`TString<api_TString>` & *key*, bool  *create* = false) const

Returns the resource information for a sub-item identified by key.

This method retrieves the ResourceInfo associated with the given sub-item key. If the sub-item doesn't exist and *create* is true, a new sub-item is created with a generated UUID and the parent's MD5 hash.

**See also** setSubItem().

----

.. _api_AssetConverterSettings_5e264b98:

 :ref:`Variant<api_Variant>`  **AssetConverterSettings::subItemData** (:ref:`TString<api_TString>` & *key*) const

Returns additional data for a sub-item by it's *key* (default returns empty object).

**See also** setSubItemData().

----

.. _api_AssetConverterSettings_6ed703c5:

const StringList **AssetConverterSettings::subKeys** () const

Returns list of all sub-item keys.

----

.. _api_AssetConverterSettings_892cd037:

 uint32_t **AssetConverterSettings::type** () const

Returns the asset type for conversion for more details see MetaType.

----

.. _api_AssetConverterSettings_9568a3f4:

 :ref:`TString<api_TString>`  **AssetConverterSettings::typeName** () const

Reimplements: Object::typeName() const.

Returns primary type name (first from typeNames()).

----

.. _api_AssetConverterSettings_42a530e6:

 StringList **AssetConverterSettings::typeNames** () const

Returns list of type names for this asset (default returns "Invalid" if type is invalid).

----

.. _api_AssetConverterSettings_27ad86eb:

 uint32_t **AssetConverterSettings::version** () const

Returns the asset converter asset format version.

**See also** setVersion().



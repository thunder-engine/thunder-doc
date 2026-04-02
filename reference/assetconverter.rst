.. _api_AssetConverter:

AssetConverter
==============

Inherited: None

.. _api_AssetConverter_description:

Description
-----------

The AssetConverter class is an abstract base class that provides an interface for converting assets in the engine. It's designed to be subclassed for specific asset types that require conversion or processing.

Example:

::

    class TextureConverter : public AssetConverter {
    public:
        QStringList suffixes() const override {
            return {"png", "jpg", "tga"};
        }
    
        ReturnCode convertFile(AssetConverterSettings *settings) override {
            // Conversion logic here
            return Success;
        }
    
        AssetConverterSettings *createSettings() override {
            return new TextureSettings();
        }
    };



.. _api_AssetConverter_public:

Public Methods
--------------

+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`AssetConverter::ReturnCode<api_AssetConverter_ReturnCode>` | :ref:`convertFile<api_AssetConverter_827f063e>` (AssetConverterSettings * settings)                                                   |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                         :ref:`Actor<api_Actor>` * | :ref:`createActor<api_AssetConverter_e1f397d8>` (const AssetConverterSettings * settings, const TString & guid) const                 |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                                              void | :ref:`createFromTemplate<api_AssetConverter_5c3682f7>` (const TString & destination)                                                  |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|       :ref:`AssetConverterSettings<api_AssetConverterSettings>` * | :ref:`createSettings<api_AssetConverter_d1f408eb>` ()                                                                                 |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                                              void | :ref:`init<api_AssetConverter_327a0915>` ()                                                                                           |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                                              void | :ref:`renameAsset<api_AssetConverter_f02735a1>` (AssetConverterSettings * settings, const TString & oldName, const TString & newName) |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                 :ref:`StringList<api_StringList>` | :ref:`suffixes<api_AssetConverter_b05a68ed>` () const                                                                                 |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`TString<api_TString>` | :ref:`templatePath<api_AssetConverter_64db5c39>` () const                                                                             |
+-------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------+

.. _api_AssetConverter_enums:

Public Enums
------------

.. _api_AssetConverter_ReturnCode:

**enum AssetConverter::ReturnCode**

+-------------------------------+-------+---------------------------------------------------+
|                      Constant | Value | Description                                       |
+-------------------------------+-------+---------------------------------------------------+
|       AssetConverter::Success | 0     | Conversion completed successfully                 |
+-------------------------------+-------+---------------------------------------------------+
| AssetConverter::InternalError | 1     | An unexpected error occurred during conversion    |
+-------------------------------+-------+---------------------------------------------------+
|   AssetConverter::Unsupported | 2     | The asset type is not supported by this converter |
+-------------------------------+-------+---------------------------------------------------+
|       AssetConverter::Skipped | 3     | Conversion was intentionally skipped              |
+-------------------------------+-------+---------------------------------------------------+



.. _api_AssetConverter_static:

Static Methods
--------------

None

.. _api_AssetConverter_methods:

Methods Description
-------------------

.. _api_AssetConverter_827f063e:

 :ref:`AssetConverter::ReturnCode<api_AssetConverter::ReturnCode>`  **AssetConverter::convertFile** (:ref:`AssetConverterSettings<api_AssetConverterSettings>` * *settings*)

Converts a file using the provided *settings*.

----

.. _api_AssetConverter_e1f397d8:

 :ref:`Actor<api_Actor>` * **AssetConverter::createActor** (:ref:`AssetConverterSettings<api_AssetConverterSettings>` * *settings*, :ref:`TString<api_TString>` & *guid*) const

Creates an actor with appropriate component using this asset using *settings* and asset *guid*.

----

.. _api_AssetConverter_5c3682f7:

 void **AssetConverter::createFromTemplate** (:ref:`TString<api_TString>` & *destination*)

Creates a new asset file from template and copies it by *destination* path.

----

.. _api_AssetConverter_d1f408eb:

 :ref:`AssetConverterSettings<api_AssetConverterSettings>` * **AssetConverter::createSettings** ()

Creates a new settings object appropriate for this converter type.

----

.. _api_AssetConverter_327a0915:

 void **AssetConverter::init** ()

Initializes the converter. Can be overridden to perform any necessary setup.

----

.. _api_AssetConverter_f02735a1:

 void **AssetConverter::renameAsset** (:ref:`AssetConverterSettings<api_AssetConverterSettings>` * *settings*, :ref:`TString<api_TString>` & *oldName*, :ref:`TString<api_TString>` & *newName*)

Handles asset renaming to react on asset change the *oldName* to *newName* (e.g. for code renaming) for the particaular asset *settings*.

----

.. _api_AssetConverter_b05a68ed:

 :ref:`StringList<api_StringList>`  **AssetConverter::suffixes** () const

Returns the list of file suffixes (extensions) this converter supports (e.g., ["png", "jpg"] for an image converter).

----

.. _api_AssetConverter_64db5c39:

 :ref:`TString<api_TString>`  **AssetConverter::templatePath** () const

Returns the path to a template file for creating new assets of this type.



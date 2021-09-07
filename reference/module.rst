.. _api_Module:
Module Class
================

Inherited: None

.. _api_Module_description:
Description
-----------

A base interface for all engine modules.

Thunder Engine uses modules to extend engine capabilities. Every engine module must be inherited from the Module class. This class contains basic information about the content of the module and creates some of the necessary in-module systems.



.. _api_Module_public:
Public Methods
--------------

+-----------------------------------------+-----------------------------------------------------+
|                                         | :ref:`Module<api_Module_Module>` ()                 |
+-----------------------------------------+-----------------------------------------------------+
|                                         | :ref:`~Module<api_Module_~Module>` ()               |
+-----------------------------------------+-----------------------------------------------------+
| :ref:`IAssetEditor<api_IAssetEditor>` * | :ref:`assetEditor<api_Module_assetEditor>` ()       |
+-----------------------------------------+-----------------------------------------------------+
|       :ref:`StringList<api_StringList>` | :ref:`components<api_Module_components>` () const   |
+-----------------------------------------+-----------------------------------------------------+
|     :ref:`IConverter<api_IConverter>` * | :ref:`converter<api_Module_converter>` ()           |
+-----------------------------------------+-----------------------------------------------------+
|     :ref:`const char<api_const char>` * | :ref:`description<api_Module_description>` () const |
+-----------------------------------------+-----------------------------------------------------+
|             :ref:`System<api_System>` * | :ref:`system<api_Module_system>` ()                 |
+-----------------------------------------+-----------------------------------------------------+
|                     :ref:`int<api_int>` | :ref:`types<api_Module_types>` () const             |
+-----------------------------------------+-----------------------------------------------------+
|     :ref:`const char<api_const char>` * | :ref:`version<api_Module_version>` () const         |
+-----------------------------------------+-----------------------------------------------------+

.. _api_Module_enums:
Public Enums
--------------

.. _api_Module_PluginTypes:
**enum Module::PluginTypes**

+-------------------+--------+----------------------------------------------------------+
|          Constant | Value  | Description                                              |
+-------------------+--------+----------------------------------------------------------+
|    Module::SYSTEM | (1<<0) | Module provides a system.                                |
+-------------------+--------+----------------------------------------------------------+
| Module::EXTENSION | (1<<1) | Module provides a set of components.                     |
+-------------------+--------+----------------------------------------------------------+
| Module::CONVERTER | (1<<2) | Module provides a converter for assets (only in Editor). |
+-------------------+--------+----------------------------------------------------------+
|    Module::EDITOR | (1<<3) | Module provides an asset editor (only in Editor).        |
+-------------------+--------+----------------------------------------------------------+



.. _api_Module_static:
Static Methods
--------------

None

.. _api_Module_methods:
Methods Description
-------------------

.. _api_Module_Module:

**Module::Module** ()

Default constructs an instance of Module.

----

.. _api_Module_~Module:

**Module::~Module** ()

Destroys the instance of Module. The destructor is virtual.

----

.. _api_Module_assetEditor:

:ref:`IAssetEditor<api_IAssetEditor>` * **Module::assetEditor** ()

----

.. _api_Module_components:

:ref:`StringList<api_StringList>`  **Module::components** () const

----

.. _api_Module_converter:

:ref:`IConverter<api_IConverter>` * **Module::converter** ()

----

.. _api_Module_description:

:ref:`const char<api_const char>` * **Module::description** () const

----

.. _api_Module_system:

:ref:`System<api_System>` * **Module::system** ()

----

.. _api_Module_types:

:ref:`int<api_int>`  **Module::types** () const

----

.. _api_Module_version:

:ref:`const char<api_const char>` * **Module::version** () const

----



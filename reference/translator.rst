.. _api_Translator:
Translator Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Translator_description:
Description
-----------

Translator resource provides a translation table.



.. _api_Translator_public:
Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------------------------------------+
|                                     | :ref:`Translator<api_Translator_Translator>` ()                                                      |
+-------------------------------------+------------------------------------------------------------------------------------------------------+
|                                     | :ref:`~Translator<api_Translator_~Translator>` ()                                                    |
+-------------------------------------+------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setPair<api_Translator_setPair>` (const std::string & source, const std::string & translation) |
+-------------------------------------+------------------------------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`translate<api_Translator_translate>` (const std::string & source) const                        |
+-------------------------------------+------------------------------------------------------------------------------------------------------+



.. _api_Translator_static:
Static Methods
--------------

+-------------------------------------------------------------------+-------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Translator_methods>` ()       |
+-------------------------------------------------------------------+-------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Translator_properties>` () |
+-------------------------------------------------------------------+-------------------------------------------------+

.. _api_Translator_methods:
Methods Description
-------------------

.. _api_Translator_Translator:

**Translator::Translator** ()

Default constructs an instance of Translator.

----

.. _api_Translator_~Translator:

**Translator::~Translator** ()

Destroys the instance of Translator. The destructor is virtual.

----

.. _api_Translator_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Translator::methods** ()

----

.. _api_Translator_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Translator::properties** ()

----

.. _api_Translator_setPair:

:ref:`void<api_void>`  **Translator::setPair** (:ref:`std::string<api_std::string>` & *source*, :ref:`std::string<api_std::string>` & *translation*)

Sets new *translation* for the *source* string.

----

.. _api_Translator_translate:

:ref:`std::string<api_std::string>`  **Translator::translate** (:ref:`std::string<api_std::string>` & *source*) const

Returns the translated *source* string.

----



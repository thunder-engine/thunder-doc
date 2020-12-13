.. _api_Bson:
Bson Class
================

Inherited: None

.. _api_Bson_description:
Description
-----------

This class implements Binary JSON parser with Variant based DOM structure input/output. It allows to serialize and deserialize object structures represented in Variant DOM structure.

Example:



.. _api_Bson_public:
Public Methods
--------------

None



.. _api_Bson_static:
Static Methods
--------------

+---------------------------------+---------------------------------------------------------------------------------------------------+
|     :ref:`Variant<api_Variant>` | :ref:`load<api_Bson_load>` (const ByteArray & data, MetaType::Type  type = MetaType::VARIANTLIST) |
+---------------------------------+---------------------------------------------------------------------------------------------------+
| :ref:`ByteArray<api_ByteArray>` | :ref:`save<api_Bson_save>` (const Variant & data)                                                 |
+---------------------------------+---------------------------------------------------------------------------------------------------+

.. _api_Bson_methods:
Methods Description
-------------------

.. _api_Bson_load:

:ref:`Variant<api_Variant>`  **Bson::load** (:ref:`ByteArray<api_ByteArray>` & *data*, :ref:`MetaType::Type<api_MetaType::Type>`  *type* = MetaType::VARIANTLIST)

Returns deserialized binary *data* as Variant based DOM structure with expected *type* of container (can be MetaType::VARIANTLIST or MetaType::VARIANTMAP).

----

.. _api_Bson_save:

:ref:`ByteArray<api_ByteArray>`  **Bson::save** (:ref:`Variant<api_Variant>` & *data*)

Returns serialized *data* as binary buffer.

----



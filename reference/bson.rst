.. _api_Bson:

Bson
====

Inherited: None

.. _api_Bson_description:

Description
-----------

This class implements Binary JSON parser with Variant based DOM structure input/output. It allows to serialize and deserialize object structures represented in Variant DOM structure.

Example:

::

    VariantMap dictionary;
    dictionary["bool"]  = true;
    dictionary["str"]   = "string";
    dictionary["int"]   = 1;
    dictionary["float"] = 2.0f;
    
    ByteArray data = Bson::save(dictionary); // Serializing dictionary to binary format
    ....
    VariantMap result = Bson::load(data).toMap(); // Resotoring it back



.. _api_Bson_public:

Public Methods
--------------

None



.. _api_Bson_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Variant<api_Variant>` | :ref:`load<api_Bson_c65f93b8>` (const ByteArray & data, MetaType::Type  type = MetaType::VARIANTLIST) |
+------------------------------+-------------------------------------------------------------------------------------------------------+
|                    ByteArray | :ref:`save<api_Bson_784aedf2>` (const Variant & data)                                                 |
+------------------------------+-------------------------------------------------------------------------------------------------------+

.. _api_Bson_methods:

Methods Description
-------------------

.. _api_Bson_c65f93b8:

 :ref:`Variant<api_Variant>`  **Bson::load** (ByteArray & *data*, :ref:`MetaType::Type<api_MetaType_Type>`  *type* = MetaType::VARIANTLIST)

Returns deserialized binary *data* as Variant based DOM structure with expected *type* of container (can be MetaType::VARIANTLIST or MetaType::VARIANTMAP).

----

.. _api_Bson_784aedf2:

 ByteArray **Bson::save** (:ref:`Variant<api_Variant>` & *data*)

Returns serialized *data* as binary buffer.



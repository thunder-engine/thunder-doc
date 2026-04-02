.. _api_MetaType:

MetaType
========

Inherited: None

.. _api_MetaType_description:

Description
-----------

This class is designed for retrieving of runtime type information with additional functionality.

Some of registered types can be automatically converted to different types with MetaType::convert functunction. The following conversions are predefined:


 TypeConvert to
MetaType::BOOLEANMetaType::INTEGER, MetaType::FLOAT, MetaType::STRING
MetaType::INTEGERMetaType::BOOLEAN, MetaType::FLOAT, MetaType::STRING, MetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::FLOATMetaType::BOOLEAN, MetaType::INTEGER, MetaType::STRING, MetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::STRINGMetaType::BOOLEAN, MetaType::INTEGER, MetaType::FLOAT
MetaType::VARIANTMAP
MetaType::VARIANTLISTMetaType::VECTOR2, MetaType::VECTOR3, MetaType::VECTOR4, MetaType::MATRIX3, MetaType::MATRIX4, MetaType::QUATERNION
MetaType::VECTOR2MetaType::VARIANTLIST, MetaType::VECTOR3, MetaType::VECTOR4
MetaType::VECTOR3MetaType::VARIANTLIST, MetaType::VECTOR4
MetaType::VECTOR4MetaType::VARIANTLIST
MetaType::QUATERNIONMetaType::VARIANTLIST
MetaType::MATRIX3MetaType::VARIANTLIST
MetaType::MATRIX4MetaType::VARIANTLIST


To convert values to other types developer should define own conversion type function using MetaType::registerConverter() function



.. _api_MetaType_public:

Public Methods
--------------

+------------+-------------------------------------------------------------------------------------------+
|            | :ref:`MetaType<api_MetaType_cd893167>` (const MetaType::Table * table)                    |
+------------+-------------------------------------------------------------------------------------------+
|       bool | :ref:`compare<api_MetaType_018a47ec>` (const void * left, const void * right) const       |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`construct<api_MetaType_4e081daf>` (void * where, const void * copy = nullptr) const |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`create<api_MetaType_df09e587>` (const void * copy = nullptr) const                  |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`destroy<api_MetaType_d3c7e602>` (void * data) const                                 |
+------------+-------------------------------------------------------------------------------------------+
|       void | :ref:`destruct<api_MetaType_367dcb08>` (void * data) const                                |
+------------+-------------------------------------------------------------------------------------------+
|        int | :ref:`flags<api_MetaType_d3ac61f8>` () const                                              |
+------------+-------------------------------------------------------------------------------------------+
|       bool | :ref:`isValid<api_MetaType_75bae3c1>` () const                                            |
+------------+-------------------------------------------------------------------------------------------+
| const char | :ref:`name<api_MetaType_f593d26e>` () const                                               |
+------------+-------------------------------------------------------------------------------------------+
|        int | :ref:`size<api_MetaType_e8246a3d>` () const                                               |
+------------+-------------------------------------------------------------------------------------------+



.. _api_MetaType_static:

Static Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`compare<api_MetaType_6bf3c185>` (const void * left, const void * right, uint32_t  type)                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`construct<api_MetaType_81af723b>` (uint32_t  type, void * where, const void * copy = nullptr)                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`convert<api_MetaType_cf718ba3>` (const void * from, uint32_t  fromType, void * to, uint32_t  toType)            |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`create<api_MetaType_09532b48>` (uint32_t  type, const void * copy = nullptr)                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`destroy<api_MetaType_84bc2190>` (uint32_t  type, void * data)                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`destruct<api_MetaType_32ebc4ad>` (uint32_t  type, void * data)                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`hasConverter<api_MetaType_dc43eaf2>` (uint32_t  from, uint32_t  to)                                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                      const char | :ref:`name<api_MetaType_d851c349>` (uint32_t  type)                                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`registerConverter<api_MetaType_3ba6ecd9>` (uint32_t  from, uint32_t  to, MetaType::converterCallback  function) |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`registerType<api_MetaType_a2354f10>` (MetaType::Table & table)                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                             int | :ref:`size<api_MetaType_c2da9e83>` (uint32_t  type)                                                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|    :ref:`MetaType::Table<api_MetaType_Table>` * | :ref:`table<api_MetaType_20c8431d>` (uint32_t  type)                                                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`type<api_MetaType_6fc24a0d>` (const char * name)                                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                        uint32_t | :ref:`type<api_MetaType_d8ce4af1>` (const type_info & type)                                                           |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|  :ref:`MetaType::TypeMap<api_MetaType_TypeMap>` | :ref:`types<api_MetaType_9ec740b6>` ()                                                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`unregisterType<api_MetaType_0b1cda26>` (MetaType::Table & table)                                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_MetaType_methods:

Methods Description
-------------------

.. _api_MetaType_cd893167:

**MetaType::MetaType** (:ref:`MetaType::Table<api_MetaType_Table>` * *table*)

Constructs MetaType object which will contain information provided in a table.

----

.. _api_MetaType_018a47ec:

 bool **MetaType::compare** (void * *left*, void * *right*) const

Returns true in case of *left* value is equal to *right* value; otherwise returns false.

----

.. _api_MetaType_6bf3c185:

 bool **MetaType::compare** (void * *left*, void * *right*, uint32_t  *type*)

Returns true in case of *left* value is equal to *right* value with type; otherwise returns false.

----

.. _api_MetaType_4e081daf:

 void **MetaType::construct** (void * *where*, void * *copy* = nullptr) const

Constructs a value of the given type, which represented by current MetaType object in the existing memory addressed by where, that is a *copy* of copy, and returns where. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_81af723b:

 void **MetaType::construct** (uint32_t  *type*, void * *where*, void * *copy* = nullptr)

Constructs a value of the given *type* in the existing memory addressed by where, that is a *copy* of copy, and returns where. If *copy* is zero, the value is default constructed.

----

.. _api_MetaType_cf718ba3:

 bool **MetaType::convert** (void * *from*, uint32_t  *fromType*, void * *to*, uint32_t  *toType*)

Tries *to* convert value *from* with type *fromType* *to* type *toType* and place the result *to* output value to. Returns true if conversion succeed; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_df09e587:

 void **MetaType::create** (void * *copy* = nullptr) const

Returns a *copy* of *copy* value, with type, which represented by current MetaType object. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_09532b48:

 void **MetaType::create** (uint32_t  *type*, void * *copy* = nullptr)

Returns a *copy* of *copy* value, with type. If *copy* is null, creates a default constructed instance.

----

.. _api_MetaType_d3c7e602:

 void **MetaType::destroy** (void * *data*) const

Destroys the value with type, which represented by current MetaType object, located at data. This function calls delete operator.

----

.. _api_MetaType_84bc2190:

 void **MetaType::destroy** (uint32_t  *type*, void * *data*)

Destroys the value with type, located at data. This function calls delete operator.

----

.. _api_MetaType_367dcb08:

 void **MetaType::destruct** (void * *data*) const

Destructs the value with type, which represented by current MetaType object, located at data. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_32ebc4ad:

 void **MetaType::destruct** (uint32_t  *type*, void * *data*)

Destructs the value with type, located at data. Unlike destroy(), this function only invokes the type's destructor, it doesn't invoke the delete operator.

----

.. _api_MetaType_d3ac61f8:

 int **MetaType::flags** () const

Returns flags for the type.

----

.. _api_MetaType_dc43eaf2:

 bool **MetaType::hasConverter** (uint32_t  *from*, uint32_t  *to*)

Returns true in case of type *from* can be converted *to* type to; otherwise returns false.

----

.. _api_MetaType_75bae3c1:

 bool **MetaType::isValid** () const

Returns true in case of this MetaType object contain valid information; otherwise returns false.

----

.. _api_MetaType_f593d26e:

const char **MetaType::name** () const

Returns the name of type.

----

.. _api_MetaType_d851c349:

const char **MetaType::name** (uint32_t  *type*)

Returns a name of *type* with *type* ID. Returns nullptr for unregistered type.

----

.. _api_MetaType_3ba6ecd9:

 bool **MetaType::registerConverter** (uint32_t  *from*, uint32_t  *to*, :ref:`MetaType::converterCallback<api_MetaType_converterCallback>`  *function*)

Registers the possibility *to* convert value type *from* *to* type *to* with conversion function. Returns true in case of converter successfully registered; otherwise returns false.

**See also** hasConverter().

----

.. _api_MetaType_a2354f10:

 uint32_t **MetaType::registerType** (:ref:`MetaType::Table<api_MetaType_Table>` & *table*)

Registers type by type MetaType::Table table. Use registerMetaType() instead this function. Returns an ID of registered type.

----

.. _api_MetaType_e8246a3d:

 int **MetaType::size** () const

Returns the size of type.

----

.. _api_MetaType_c2da9e83:

 int **MetaType::size** (uint32_t  *type*)

Returns a size of *type* with *type* ID. Returns 0 for unregistered type.

----

.. _api_MetaType_20c8431d:

 :ref:`MetaType::Table<api_MetaType::Table>` * **MetaType::table** (uint32_t  *type*)

Returns *type* information table if *type* registered; otherwise returns nullptr.

----

.. _api_MetaType_6fc24a0d:

 uint32_t **MetaType::type** (char * *name*)

Returns an ID of type with type name. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_d8ce4af1:

 uint32_t **MetaType::type** (:ref:`type_info<api_type_info>` & *type*)

Returns an ID of *type* with *type* info. Returns MetaType::INVALID for unregistered type.

----

.. _api_MetaType_9ec740b6:

 :ref:`MetaType::TypeMap<api_MetaType::TypeMap>`  **MetaType::types** ()

Returns a table of registered types.

----

.. _api_MetaType_0b1cda26:

 void **MetaType::unregisterType** (:ref:`MetaType::Table<api_MetaType_Table>` & *table*)

Unregisters type by type MetaType::Table table. Use unregisterMetaType() instead this function.



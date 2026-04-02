.. _api_Material:

Material
========

Inherited: None

.. _api_Material_description:

Description
-----------



.. _api_Material_public:

Public Methods
--------------

+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`createInstance<api_Material_37f18abc>` (Material::SurfaceType  type = SurfaceType::Static) |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`doubleSided<api_Material_652bd03e>` () const                                               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`layers<api_Material_58b04afe>` () const                                                    |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`lightModel<api_Material_b810dca9>` () const                                                |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`materialType<api_Material_e0d54f3b>` () const                                              |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDoubleSided<api_Material_c51de469>` (bool  flag)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setLightModel<api_Material_09267ead>` (int  model)                                         |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialType<api_Material_47c9d6a1>` (int  type)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setPriority<api_Material_56827c9b>` (int  priority)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setWireframe<api_Material_45981d36>` (bool  wireframe)                                     |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`uniformSize<api_Material_b3268190>` () const                                               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`wireframe<api_Material_8e1c9d76>` () const                                                 |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_Material_static:

Static Methods
--------------

None

.. _api_Material_methods:

Methods Description
-------------------

.. _api_Material_37f18abc:

 :ref:`MaterialInstance<api_MaterialInstance>` * **Material::createInstance** (:ref:`Material::SurfaceType<api_Material_SurfaceType>`  *type* = SurfaceType::Static)

Returns a new instance for the material with the provided surface type.

----

.. _api_Material_652bd03e:

 bool **Material::doubleSided** () const

Returns true if mas marked as double-sided; otherwise returns false.

**See also** setDoubleSided().

----

.. _api_Material_58b04afe:

 int **Material::layers** () const

Returns layers that supported by this material.

----

.. _api_Material_b810dca9:

 int **Material::lightModel** () const

Returns current light model for the material. For more detalse please refer to Material::LightModelType enum.

**See also** setLightModel().

----

.. _api_Material_e0d54f3b:

 int **Material::materialType** () const

Returns current material type. For more detalse please refer to Material::Type enum.

**See also** setMaterialType().

----

.. _api_Material_c51de469:

 void **Material::setDoubleSided** (bool  *flag*)

Enables or disables the double-sided *flag* for the material.

**See also** doubleSided().

----

.. _api_Material_09267ead:

 void **Material::setLightModel** (int  *model*)

Sets a new light *model* for the material. For more detalse please refer to Material::LightModelType enum.

**See also** lightModel().

----

.. _api_Material_47c9d6a1:

 void **Material::setMaterialType** (int  *type*)

Sets new material type. For more detalse please refer to Material::Type enum.

**See also** materialType().

----

.. _api_Material_56827c9b:

 void **Material::setPriority** (int  *priority*)

Sets a rendering *priority* for the material. This parameter is used alpha rendering sorting

----

.. _api_Material_45981d36:

 void **Material::setWireframe** (bool  *wireframe*)

Enables or disables a *wireframe* mode for the material.

**See also** wireframe().

----

.. _api_Material_b3268190:

 int **Material::uniformSize** () const

Returns size uniform buffer for single instance. This value can be used as stride for instances.

----

.. _api_Material_8e1c9d76:

 bool **Material::wireframe** () const

Returns true if material must be rendered as wireframe.

**See also** setWireframe().



.. _api_Material:

Material Class
==============

Inherited: :doc:`Resource<api_Resource>`

.. _api_Material_description:

Description
-----------



.. _api_Material_public:

Public Methods
--------------

+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`blendMode<api_Material_blendMode>` () const                                                      |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`createInstance<api_Material_createInstance>` (Material::SurfaceType  type = SurfaceType::Static) |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`depthTest<api_Material_depthTest>` () const                                                      |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`depthWrite<api_Material_depthWrite>` () const                                                    |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`doubleSided<api_Material_doubleSided>` () const                                                  |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`lightModel<api_Material_lightModel>` () const                                                    |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                              int | :ref:`materialType<api_Material_materialType>` () const                                                |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setBlendMode<api_Material_setBlendMode>` (int  mode)                                             |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDepthTest<api_Material_setDepthTest>` (bool  test)                                            |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDepthWrite<api_Material_setDepthWrite>` (bool  depth)                                         |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDoubleSided<api_Material_setDoubleSided>` (bool  flag)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setLightModel<api_Material_setLightModel>` (int  model)                                          |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialType<api_Material_setMaterialType>` (int  type)                                       |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setTexture<api_Material_setTexture>` (const std::string & name, Texture * texture)               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setWireframe<api_Material_setWireframe>` (bool  wireframe)                                       |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`wireframe<api_Material_wireframe>` () const                                                      |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------------+



.. _api_Material_static:

Static Methods
--------------

None

.. _api_Material_methods:

Methods Description
-------------------

.. _api_Material_blendMode:

 int **Material::blendMode** () const

Returns current blend mode for the material. For more detalse please refer to Material::BlendType enum.

**See also** setBlendMode().

----

.. _api_Material_createInstance:

 :ref:`MaterialInstance<api_MaterialInstance>`* **Material::createInstance** (:ref:`Material::SurfaceType<api_Material::SurfaceType>`  *type* = SurfaceType::Static)

Returns a new instance for the material with the provided surface *type*.

----

.. _api_Material_depthTest:

 bool **Material::depthTest** () const

Returns true if depth test was enabled; otherwise returns false.

**See also** setDepthTest().

----

.. _api_Material_depthWrite:

 bool **Material::depthWrite** () const

Returns true if write opertaion to the depth buffer was enabled; otherwise returns false.

**See also** setDepthWrite().

----

.. _api_Material_doubleSided:

 bool **Material::doubleSided** () const

Returns true if mas marked as double-sided; otherwise returns false.

**See also** setDoubleSided().

----

.. _api_Material_lightModel:

 int **Material::lightModel** () const

Returns current light model for the material. For more detalse please refer to Material::LightModelType enum.

**See also** setLightModel().

----

.. _api_Material_materialType:

 int **Material::materialType** () const

Returns current material type. For more detalse please refer to Material::MaterialType enum.

**See also** setMaterialType().

----

.. _api_Material_setBlendMode:

 void **Material::setBlendMode** (int  *mode*)

Sets a new blend *mode* for the material. For more detalse please refer to Material::BlendType enum.

**See also** blendMode().

----

.. _api_Material_setDepthTest:

 void **Material::setDepthTest** (bool  *test*)

Enables or disables a depth *test* for the material.

**See also** depthTest().

----

.. _api_Material_setDepthWrite:

 void **Material::setDepthWrite** (bool  *depth*)

Enables or disables *depth* write operation to the *depth* buffer.

**See also** *depth*Write().

----

.. _api_Material_setDoubleSided:

 void **Material::setDoubleSided** (bool  *flag*)

Enables or disables the double-sided *flag* for the material.

**See also** doubleSided().

----

.. _api_Material_setLightModel:

 void **Material::setLightModel** (int  *model*)

Sets a new light *model* for the material. For more detalse please refer to Material::LightModelType enum.

**See also** lightModel().

----

.. _api_Material_setMaterialType:

 void **Material::setMaterialType** (int  *type*)

Sets new material *type*. For more detalse please refer to Material::MaterialType enum.

**See also** materialType().

----

.. _api_Material_setTexture:

 void **Material::setTexture** (std::string & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* with a given *name* for the material.

----

.. _api_Material_setWireframe:

 void **Material::setWireframe** (bool  *wireframe*)

Enables or disables a *wireframe* mode for the material.

**See also** *wireframe*().

----

.. _api_Material_wireframe:

 bool **Material::wireframe** () const

Returns true if material must be rendered as wireframe.

**See also** setWireframe().


